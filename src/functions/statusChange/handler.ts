import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';

//TODA VEZ QUE UMA ALTERAÇÃO DE STATUS ACONTECE NO PEDIDO DA OMNICHAT ESSA FUNCTION É ACIONADA
export const statusChange: APIGatewayProxyHandler = async (event) => {
  const order = JSON.parse(event.body);

  // AQUI VC PODE AJUSTAR O STATUS NO SEU ERP

  return formatJSONResponse({ result: 'ok' });
};

export const main = statusChange;
