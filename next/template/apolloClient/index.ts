import { ApolloClient, InMemoryCache } from "@apollo/client";

const NEXT_PUBLIC_SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const NEXT_PUBLIC_SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const apolloClient = new ApolloClient({
  uri: `https://${NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${NEXT_PUBLIC_SANITY_DATASET}/default`,
  cache: new InMemoryCache(),
  ssrMode: true,
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});
