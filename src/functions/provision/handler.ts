import { formatJSONResponse } from '@libs/api-gateway';
import * as utils from '@libs/utils';
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';

//ESSA API é async, voce pode chamar outra lambda para fazer o aprovisionamento do seu sistema e já retornar 200 nessa aqui
// ou voce pode fazer o processo todo aqui, já chamando o changeStatus nessa mesma lambda conforme exemplo abaixo, porém esse processo não pode levar mais que 5 segundos senão vai dar timeout
export const provision: APIGatewayProxyHandler = async (event) => {
  const order = JSON.parse(event.body);

  // NESSE PONTO VOCE PODE CHAMAR A CRIAÇÃO DO PEDIDO NO SEU SISTEMA ERP/COMMERCE/SITE, ETC 
  // EFETUAR RESERVA DE ESTOQUE E O QUE MAIS FOR NECESSÁRIO


  // LOGO APÓS TODO PROCESSO DE APROVISIONAMENTO SER EXECUTADO, O STATUS DO PEDIDO DEVE SER ATUALIZADO NA OMNI:
  //TODO: LEMBRE-SE DE GERAR A API SECRET ANTES DE EXECUTAR O SEGUINTE MÉTODO

  await utils.updateOmniChatOrderStatus(order.objectId, "ORDER_GATEWAY_PROVISIONED", 'Pedido Criado!'); 
  return formatJSONResponse({ result: 'ok' });
};

export const main = provision;
