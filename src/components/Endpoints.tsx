import { Dispatch, SetStateAction } from 'react'
import { iEndpoint } from '../types'

type iProps = {
  endpoint: iEndpoint
  setEndpoint: Dispatch<SetStateAction<iEndpoint>>
}

const Endpoints = ({ endpoint, setEndpoint }: iProps) => {
  return (
    <div className="flex mb-2 space-x-2">
      <div className="text-xs mt-[9px] text-white opacity-50">MongoDB Collections:</div>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'books' ? true : false}
          onChange={() => setEndpoint('books')}
        />
        <span className="label-text text-base-100 pl-2">books</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'orders' ? true : false}
          onChange={() => setEndpoint('orders')}
        />
        <span className="label-text text-base-100 pl-2">orders</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'feedbacks' ? true : false}
          onChange={() => setEndpoint('feedbacks')}
        />
        <span className="label-text text-base-100 pl-2">feedbacks</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'users' ? true : false}
          onChange={() => setEndpoint('users')}
        />
        <span className="label-text text-base-100 pl-2">users</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'categories' ? true : false}
          onChange={() => setEndpoint('categories')}
        />
        <span className="label-text text-base-100 pl-2">categories</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="endpoints"
          className="radio radio-xs radio-warning"
          checked={endpoint === 'tags' ? true : false}
          onChange={() => setEndpoint('tags')}
        />
        <span className="label-text text-base-100 pl-2">tags</span>
      </label>
    </div>
  )
}

export default Endpoints
