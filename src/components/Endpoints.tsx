import { Dispatch, SetStateAction } from 'react'
import { iEndpoint } from '../types'

type iProps = {
  endpoint: iEndpoint
  setEndpoint: Dispatch<SetStateAction<iEndpoint>>
}

const Endpoints = ({ endpoint, setEndpoint }: iProps) => {
  return (
    <div className="flex mb-2 space-x-2">
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-info"
          checked={endpoint === 'books' ? true : false}
          onChange={() => setEndpoint('books')}
        />
        <span className="label-text text-base-100 pl-2">books</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-info"
          checked={endpoint === 'orders' ? true : false}
          onChange={() => setEndpoint('orders')}
        />
        <span className="label-text text-base-100 pl-2">orders</span>
      </label>
    </div>
  )
}

export default Endpoints
