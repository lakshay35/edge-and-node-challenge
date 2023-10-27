import { ApolloClient, InMemoryCache } from '@apollo/client'

export const graphClient = new ApolloClient({
  uri: process.env.NETWORK_HTTP_URI,
  cache: new InMemoryCache(),
})
