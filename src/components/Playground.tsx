import { useState } from 'react'
import { toast } from 'react-toastify'
import { iEndpoint, iQueryResult, iResult, iUserTypes } from '../types'
import { getToken } from '../utils/getToken'
import { getUrl } from '../utils/getUrl'
import Display from './Display'
import Endpoints from './Endpoints'
import Extender from './Extender'
import Heading from './Heading'
import Search from './Search'
import Token from './Token'

const Playground = () => {
  const [endpoint, setEndpoint] = useState<iEndpoint>('books')
  const [token, setToken] = useState<iUserTypes>('admin')
  const [result, setResult] = useState<iResult>(null)
  const [queryResult, setQueryResult] = useState<iQueryResult>(null)

  const searchHandler = async (text: string) => {
    const res = await fetch(getUrl(text, 'v1'), {
      method: 'GET',
      headers: {
        authorization: getToken(token)
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
      setQueryResult(null)
    }
  }

  return (
    <div className="space-y-5">
      <div className="bg-accent rounded-2xl px-5 py-10 md:p-10 relative">
        <Heading />
        <Endpoints endpoint={endpoint} setEndpoint={setEndpoint} />
        <Search endpoint={endpoint} searchHandler={searchHandler} />
        <Token token={token} setToken={setToken} />
        <Extender endpoint={endpoint} />
      </div>
      <Display result={result} queryResult={queryResult} endpoint={endpoint} />
    </div>
  )
}

export default Playground
