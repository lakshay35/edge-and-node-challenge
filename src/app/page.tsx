'use client'
import { ApolloProvider } from '@apollo/client'
import { graphClient } from '../api'
import { Epoches } from '../components/epoches'

export default function IndexPage() {
  return (
    <ApolloProvider client={graphClient}>
      <Epoches />
    </ApolloProvider>
  )
}
