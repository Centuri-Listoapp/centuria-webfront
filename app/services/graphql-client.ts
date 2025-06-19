import { GraphQLClient } from 'graphql-request';
import { CONFIG } from '../constants/globals';

const endpoint = CONFIG.GRAPHQL_API;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2E2YjhiMmVkYjc0NWFlOTY3YjJjYTgiLCJyb2xlIjoiY2FuZGlkYXRlIiwiaWF0IjoxNzUwMzQ1ODQxLCJleHAiOjE3NTA0MzIyNDF9.xYwFASJOKAR83xediQPjYzn6KWkN7aOgCzvw2muTi4k`, // si es necesario
  },
});
