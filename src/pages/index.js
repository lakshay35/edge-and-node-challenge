import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from '../apollo/client'

const Index = () => {
  return (
    <div>
      <div
        sx={{
          pt: '48px',
          m: '0 auto',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to the Edge & Node coding challenge!</h1>
      </div>
    </div>
  )
}

export default withApollo(Index, { ssr: false })
