import { GraphQLClient } from "graphql-request";
import { CONFIG } from "../constants/globals";
import authService from "./authService";

const endpoint = CONFIG.GRAPHQL_API;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: () => ({ authorization: `Bearer ${authService.token}` }),
});
