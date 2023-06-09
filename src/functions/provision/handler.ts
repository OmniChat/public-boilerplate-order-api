import { formatJSONResponse } from '@libs/api-gateway';
import * as utils from '@libs/utils';
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';

//ESSA API é async, basta chamar o processo de aprovisionamento do seu sistema e já retornar 200, não precisa esperar terminar o processo de aprovisionamento
export const provision: APIGatewayProxyHandler = async (event) => {
  const order = JSON.parse(event.body);

  // NESSE PONTO VOCE PODE CHAMAR A CRIAÇÃO DO PEDIDO NO SEU SISTEMA ERP/COMMERCE/SITE, ETC 
  // EFETUAR RESERVA DE ESTOQUE E O QUE MAIS FOR NECESSÁRIO


  // LOGO APÓS TODO PROCESSO DE APROVISIONAMENTO SER EXECUTADO, O STATUS DO PEDIDO DEVE SER ATUALIZADO NA OMNI:
  //TODO: LEMBRE-SE DE GERAR A API SECRET ANTES DE EXECUTAR O SEGUINTE MÉTODO
  utils.updateOmniChatOrderStatus(order.objectId, "ORDER_GATEWAY_PROVISIONED", 'Pedido Criado!'); 

  return formatJSONResponse({ result: 'ok' });
};

export const main = provision;
