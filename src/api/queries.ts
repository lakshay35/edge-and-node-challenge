import { gql } from '@apollo/client'

export const GET_EPOCHES_QUERY = gql`
  query GetEpoches {
    epoches {
      id
      startBlock
      endBlock
      totalQueryFees
      totalRewards
    }
  }
`
