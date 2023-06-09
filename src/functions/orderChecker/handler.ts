import { formatJSONResponse } from "@libs/api-gateway";
import { APIGatewayProxyHandler } from "aws-lambda/trigger/api-gateway-proxy";

//TODA VEZ QUE UMA ALTERAÇÃO ACONTECE NO PEDIDO DA OMNICHAT ESSA FUNCTION É ACIONADA
export const orderChecker: APIGatewayProxyHandler = async (event) => {
  const order = JSON.parse(event.body);

  // AQUI VC PODE EFETUAR VÁRIAS VALIDAÇÕES E ALTERAÇÕES NO PEDIDO, TAIS COMO:
  // INCLUSÃO DE FRETE, DESCONTO, VALIDAÇÃO DE ESTOQUE, ADIÇÃO DE ITENS BRINDE, INCLUSÃO DE MENSAGENS DE ALERTA, ERROS, ETC.
  // https://help.omni.chat/pt-BR/articles/4726625-integracao-order-checker

  // EXEMPLO
  const orderCheckerOptions = [];
  order.items?.forEach((item) => {
    // ADICIONANDO AOS ITENS DO PEDIDO
    orderCheckerOptions.push(getItemShippingOptions(item));
    // VALIDANDO ESTOQUE DOS ITENS SELECIONADOS
    if (!verifyItemStock(item)) {
      orderCheckerOptions.push(getItemStockUnavailableOption(item));
    }
  });

  return formatJSONResponse(orderCheckerOptions);
};

function verifyItemStock(item: any): boolean {
  // VOCE PODE VALIDAR O ESTOQUE DESSE ITEM NO SEU ERP E RETORNAR COMO INDISPONIVEL PARA OMNICHAT 
  
  return item.quantity % 2 == 1; // retorna true para numero impar e false para numero par, somente para teste 
}

function getItemStockUnavailableOption(item: any): Record<string, unknown> {
  return {
    action: "ERROR",
    component: "ITEM",
    componentId: item.objectId,
    message: "Item não disponível",
  };
}

function getItemShippingOptions(item: any): Record<string, unknown> {
  return {
    action: "INFO",
    component: "ITEM",
    componentId: item.objectId,
    shippingMethod: "PAC", // método de entrega selecionado,
    shippingOptions: [
      {
        id: "PAC",
        name: "PAC",
        price: 5,
        listPrice: 5,
        tax: 0,
        deliveryChannel: "delivery",
        shippingEstimate: "3bd",
        productLockedTime: null,
      },
      {
        id: "Expresso",
        name: "Expresso",
        price: 10,
        listPrice: 10,
        tax: 0,
        deliveryChannel: "delivery",
        shippingEstimate: "0bd",
        productLockedTime: null,
      },
    ],
  };
}

export const main = orderChecker;
