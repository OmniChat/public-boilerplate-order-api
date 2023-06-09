import { formatJSONResponse } from '@libs/api-gateway';
import { APIGatewayProxyHandler } from 'aws-lambda/trigger/api-gateway-proxy';
import { catalogCommerce } from 'src/fakeCommerce/CommerceCatalog';

export const catalog: APIGatewayProxyHandler = async (event) => {
  const query = event.queryStringParameters ? event.queryStringParameters['query'] : '';
  return formatJSONResponse(catalogCommerce.getProducts(query));
};

export const main = catalog;
