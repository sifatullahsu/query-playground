import { useState } from 'react'
import { toast } from 'react-toastify'
import { iEndpoint, iQueryResult, iResult, iRole } from '../types'
import { getUrl } from '../utils/getUrl'
import Display from './Display'
import Endpoints from './Endpoints'
import Example from './Example'
import Heading from './Heading'
import Search from './Search'
import Token from './Token'

const Playground = () => {
  const [endpoint, setEndpoint] = useState<iEndpoint>('books')
  const [token, setToken] = useState<iRole>('admin')
  const [result, setResult] = useState<iResult>(null)
  const [queryResult, setQueryResult] = useState<iQueryResult>(null)

  const searchHandler = async (text: string) => {
    const admin = import.meta.env.VITE_ADMIN_TOKEN
    const seller = import.meta.env.VITE_SELLER_TOKEN
    const buyer = import.meta.env.VITE_BUYER_TOKEN

    const res = await fetch(getUrl(text, 'v1'), {
      method: 'GET',
      headers: {
        authorization:
          token === 'admin' ? admin : token === 'seller' ? seller : token === 'buyer' ? buyer : ''
      }
    })
    const result = await res.json()

    if (result.success) {
      toast.success(result.message)
      setQueryResult(result.queryResult)
      delete result.queryResult
      setResult(result)
    } else {
      toast.error(result.message)
      setResult(result)
    }
  }

  return (
    <div className="space-y-5">
      <div className="bg-accent rounded-2xl px-5 py-10 md:p-10 relative">
        <Heading />
        <Endpoints endpoint={endpoint} setEndpoint={setEndpoint} />
        <Search endpoint={endpoint} searchHandler={searchHandler} />
        <Token token={token} setToken={setToken} />
        <Example endpoint={endpoint} />
      </div>
      <Display result={result} queryResult={queryResult} endpoint={endpoint} />
    </div>
  )
}

export default Playground
