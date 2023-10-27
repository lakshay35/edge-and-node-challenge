'use client'

import { useQuery } from '@apollo/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import delegate from '../../public/images/Delegate.svg'
import directionDown from '../../public/images/Direction-Down.svg'
import directionUp from '../../public/images/Direction-Up.svg'
import delegateIcon from '../../public/images/delegate-icon.svg'
import { GET_EPOCHES_QUERY } from '../api/queries'
import { Epoch, IGetEpochesResponse } from '../types'
import { OrderDirection } from '../types/enums'
import { epochFilter, epochSorter, transformEpoches } from '../utils/epoches'
import { formatGRTValue } from '../utils/numberFormat'
import { SearchBox } from './searchBox'

export const Epoches = () => {
  const [epoches, setEpoches] = useState<Array<Epoch>>([])
  const [orderBy, setOrderBy] = useState('startBlock')
  const [orderDirection, setOrderDirection] = useState<OrderDirection>(
    OrderDirection.DESC,
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [showAmount, setShowAmount] = useState(3)
  const router = useRouter()

  // Switch between queries if order by is selected
  const { data } = useQuery<IGetEpochesResponse>(GET_EPOCHES_QUERY)

  const headers = [
    { label: 'id', value: 'id' },
    { label: 'start block', value: 'startBlock' },
    { label: 'end block', value: 'endBlock' },
    { label: 'query fees', value: 'totalQueryFees' },
    { label: 'total rewards', value: 'totalRewards' },
  ]

  // copy epoches retrieved from graphql response to local copy
  useEffect(() => {
    setEpoches(transformEpoches(data?.epoches || []))
  }, [data])

  const handleColumnClick = (
    columnName: string,
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>,
  ) => {
    const orderDirection = event.currentTarget.getAttribute(
      'order-direction',
    ) as OrderDirection
    if (orderDirection == OrderDirection.ASC) {
      setOrderDirection(OrderDirection.DESC)
      event.currentTarget.setAttribute('order-direction', OrderDirection.DESC)
    } else {
      // DESC order direction
      setOrderDirection(OrderDirection.ASC)
      event.currentTarget.setAttribute('order-direction', OrderDirection.ASC)
    }

    setOrderBy(columnName)
  }

  const handleShowMore = () => {
    setShowAmount(showAmount + 3)
  }

  const handleSearchQueryChange = (searchQuery: string) => {
    setSearchQuery(searchQuery)
  }

  return (
    <div className="overflow-hidden">
      <div className="flex">
        <h1 className="text-[32px] tracking-[-0.8] text-white mr-[16px]">Indexers</h1>
        <SearchBox onSearchQueryChange={handleSearchQueryChange} />
      </div>
      <table className="w-full text-white block md:table overflow-scroll">
        <tbody className="text-left">
          <tr className="text-[10px] border-b-[0.25px] border-solid border-superlightgrey">
            {headers.map((header, i) => (
              <th
                key={`header_${i}`}
                className={`min-w-[100px] ${
                  orderBy == header.value && 'border-b-[1px] border-solid border-white'
                }`}
                onClick={(event) => handleColumnClick(header.value, event)}
              >
                <div className="flex uppercase cursor-pointer font-light">
                  <span className="mr-2">{header.label}</span>
                  {orderBy == header.value && orderDirection == OrderDirection.ASC && (
                    <Image src={directionUp} alt="asc" />
                  )}
                  {orderBy == header.value && orderDirection == OrderDirection.DESC && (
                    <Image src={directionDown} alt="desc" />
                  )}
                </div>
              </th>
            ))}
            <th></th>
          </tr>
          {epoches
            .sort(epochSorter(orderDirection, orderBy))
            .filter(epochFilter(searchQuery))
            .slice(0, showAmount)
            .map((epoch, index) => (
              <tr
                key={`epoch_${index}`}
                className="h-[64px] border-b-[0.25px] border-solid border-superlightgrey hover:bg-rowselection"
              >
                <td>
                  <div className="my-auto flex">
                    <Image
                      src={delegateIcon}
                      className="w-[24px] h-[24px] mr-[8px]"
                      alt={`id_logo_${epoch.id}`}
                    />
                    {epoch.id}
                  </div>
                </td>
                <td>{epoch.startBlock}</td>
                <td>{epoch.endBlock}</td>

                <td>{formatGRTValue(epoch.totalQueryFees)}</td>
                <td>{formatGRTValue(epoch.totalRewards)}</td>
                <td>
                  <div className="hover:bg-delegate w-[40px] h-[40px] hover:rounded-full flex items-center justify-center cursor-pointer">
                    <Image
                      src={delegate}
                      alt="delegate"
                      className="m-auto"
                      onClick={() => router.push(`/delegate?id=${epoch.id}`)}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className="text-inactive text-[12px]">
        {
          epoches
            .sort(epochSorter(orderDirection, orderBy))
            .filter(epochFilter(searchQuery))
            .slice(0, showAmount).length
        }{' '}
        of {epoches.filter(epochFilter(searchQuery)).length}
      </p>
      <div className="flex mt-20">
        <button
          className="cursor-pointer m-auto text-white border-loadmore border-[1px] py-[14px] px-[32.5px] rounded"
          onClick={() => handleShowMore()}
        >
          Show more
        </button>
      </div>
    </div>
  )
}
