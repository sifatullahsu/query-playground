import { Dispatch, SetStateAction } from 'react'
import { iUserTypes } from '../types'

type iProps = {
  token: iUserTypes
  setToken: Dispatch<SetStateAction<iUserTypes>>
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
          checked={token === 'seller_01' ? true : false}
          onChange={() => setToken('seller_01')}
        />
        <span className="label-text text-base-100 pl-2">seller¹</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'seller_02' ? true : false}
          onChange={() => setToken('seller_02')}
        />
        <span className="label-text text-base-100 pl-2">seller²</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'buyer_01' ? true : false}
          onChange={() => setToken('buyer_01')}
        />
        <span className="label-text text-base-100 pl-2">buyer¹</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'buyer_02' ? true : false}
          onChange={() => setToken('buyer_02')}
        />
        <span className="label-text text-base-100 pl-2">buyer²</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'buyer_03' ? true : false}
          onChange={() => setToken('buyer_03')}
        />
        <span className="label-text text-base-100 pl-2">buyer³</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'buyer_04' ? true : false}
          onChange={() => setToken('buyer_04')}
        />
        <span className="label-text text-base-100 pl-2">buyer⁴</span>
      </label>
      <label className="label cursor-pointer">
        <input
          type="radio"
          name="tokens"
          className="radio radio-xs radio-warning"
          checked={token === 'without_token' ? true : false}
          onChange={() => setToken('without_token')}
        />
        <span className="label-text text-base-100 pl-2">without token</span>
      </label>
    </div>
  )
}

export default Token
