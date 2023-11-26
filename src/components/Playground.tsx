import { useState } from 'react'
import { iEndpoint, iResult } from '../types'
import { getUrl } from '../utils/getUrl'
import Display from './Display'
import Endpoints from './Endpoints'
import Heading from './Heading'
import Search from './Search'

const Playground = () => {
  const [endpoint, setEndpoint] = useState<iEndpoint>('books')
  const [result, setResult] = useState<iResult>(null)

  const searchHandler = async (text: string) => {
    const res = await fetch(getUrl(text, 'v1'))
    const result = await res.json()

    setResult(result)
  }

  return (
    <div className="space-y-5">
      <div className="bg-accent rounded-2xl p-10 relative">
        <Heading />
        <Endpoints endpoint={endpoint} setEndpoint={setEndpoint} />
        <Search endpoint={endpoint} searchHandler={searchHandler} />
      </div>
      <div>
        <Display result={result} />
      </div>
    </div>
  )
}

export default Playground
