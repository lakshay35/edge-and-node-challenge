import { IEpoch, Epoch } from '../types'
import { OrderDirection } from '../types/enums'

export const transformEpoches = (epoches: Array<IEpoch>): Array<Epoch> => {
  return epoches.map((epoch) => ({
    ...epoch,
    totalQueryFees: Number(epoch.totalQueryFees),
    totalRewards: Number(epoch.totalRewards),
  }))
}

export const epochSorter = (orderDirection: OrderDirection, orderBy: string) => {
  return (a: Epoch, b: Epoch) => {
    if (orderDirection === OrderDirection.ASC) {
      switch (orderBy) {
        case 'id':
          return a.id.localeCompare(b.id)
        case 'startBlock':
          return a.startBlock - b.startBlock
        case 'endBlock':
          return a.endBlock - b.endBlock
        case 'totalQueryFees':
          return a.totalQueryFees - b.totalQueryFees
        case 'totalRewards':
          return a.totalRewards - b.totalRewards
      }
    } else {
      switch (orderBy) {
        case 'id':
          return b.id.localeCompare(a.id)
        case 'startBlock':
          return b.startBlock - a.startBlock
        case 'endBlock':
          return b.endBlock - a.endBlock
        case 'totalQueryFees':
          return b.totalQueryFees - a.totalQueryFees
        case 'totalRewards':
          return b.totalRewards - a.totalRewards
      }
    }
    return 0
  }
}

export const epochFilter = (searchQuery: string) => {
  return (epoch: Epoch) => {
    if (String(epoch.startBlock).indexOf(searchQuery) != -1) {
      return true
    }

    return false
  }
}
