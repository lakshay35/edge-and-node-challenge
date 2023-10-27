export interface IEpoch {
  id: string
  startBlock: number
  endBlock: number
  totalQueryFees: string
  totalRewards: string
}

export type Epoch = {
  id: string
  startBlock: number
  endBlock: number
  totalQueryFees: number
  totalRewards: number
}
