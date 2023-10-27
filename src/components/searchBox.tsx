import { useState } from 'react'
import searchImg from '../../public/images/Search.svg'
import closeImg from '../../public/images/close.svg'
import Image from 'next/image'

interface ISearchBoxProps {
  onSearchQueryChange: (searchQuery: string) => void
}

export const SearchBox = ({ onSearchQueryChange }: ISearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <div className="border-[1px] border-grey w-[1px] h-[25px] my-auto mr-[9.5px]" />
      <Image
        onClick={() => {
          setSearchQuery('')
          onSearchQueryChange('')
        }}
        src={searchQuery ? closeImg : searchImg}
        alt="search icon"
        className="fill-white hover:color-white color-inactive"
      />
      <input
        onChange={(event) => {
          setSearchQuery(event.currentTarget.value)
          onSearchQueryChange(event.currentTarget.value)
        }}
        placeholder="Search"
        value={searchQuery}
        type="text"
        className="text-white pl-[4.5px] text-[14px] placeholder-inactive hover:placeholder-white bg-transparent rounded-[5px] w-[200px] border-1 border-solid border-transparent focus:outline-none"
      />
    </>
  )
}
