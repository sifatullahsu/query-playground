/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { HiOutlineDotsVertical, HiOutlineSearch } from 'react-icons/hi'
import { iEndpoint } from '../types'

type iProps = {
  endpoint: iEndpoint
  searchHandler: (text: string) => void
}

const Search = ({ endpoint, searchHandler }: iProps) => {
  const defaultText = `https://api.example.com/v1/${endpoint}?`
  const [value, setValue] = useState(defaultText)

  useEffect(() => setValue(defaultText), [defaultText])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value

    if (text.startsWith(defaultText)) {
      setValue(text)
    } else {
      setValue(defaultText)
    }
  }

  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        className="pl-16 pr-12 py-3 rounded-full w-full focus-visible:outline-none text-[#565656]"
        autoComplete="off"
        onChange={changeHandler}
        onKeyDown={e => e.key === 'Enter' && searchHandler(value)}
        value={value}
      />
      <HiOutlineSearch className="absolute top-3 left-4 text-2xl border-r-2 pr-2 w-[35px]" />
      <HiOutlineDotsVertical className="absolute top-[.6rem] right-4 text-xl w-[30px] h-[30px] cursor-pointer hover:bg-slate-100 p-1 rounded-full" />
    </div>
  )
}

export default Search
