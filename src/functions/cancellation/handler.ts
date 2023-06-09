import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';

//TODA VEZ QUE UM PEDIDO É CANCELADO NA OMNI ESSA FUNCTION É ACIONADA
export const cancellation: APIGatewayProxyHandler = async (event) => {
  const order = JSON.parse(event.body);

  // AQUI VC PODE EFETUAR O CANCELAMENTO DO PEDIDO NO SEU ERP

  return formatJSONResponse({ result: 'ok' });
};

export const main = cancellation;
