import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cmagxz9ty00hz07w38a9jwnks/master',
  cache: new InMemoryCache()
})