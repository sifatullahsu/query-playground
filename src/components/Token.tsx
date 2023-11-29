import { Dispatch, SetStateAction } from 'react'
import { iRole } from '../types'

type iProps = {
  token: iRole
  setToken: Dispatch<SetStateAction<iRole>>
}

const Token = ({ token, setToken }: iProps) => {
  return (
    <div className="flex mt-2 space-x-2">
      <div className="text-xs mt-[9px] text-white opacity-50">Authorization Header Token:</div>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'admin' ? true : false}
          onChange={() => setToken('admin')}
        />
        <span className="label-text text-base-100 pl-2">admin</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'seller' ? true : false}
          onChange={() => setToken('seller')}
        />
        <span className="label-text text-base-100 pl-2">seller</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'buyer' ? true : false}
          onChange={() => setToken('buyer')}
        />
        <span className="label-text text-base-100 pl-2">buyer</span>
      </label>
    </div>
  )
}

export default Token
