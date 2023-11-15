import { useState } from 'react'
import { iEndpoint, iResult } from '../types'
import Display from './Display'
import Endpoints from './Endpoints'
import Heading from './Heading'
import Search from './Search'

const Playground = () => {
  const [endpoint, setEndpoint] = useState<iEndpoint>('books')
  const [result, setResult] = useState<iResult>(null)

  const searchHandler = async (text: string) => {
    console.log(text)

    const json = {
      name: 'John Doe',
      age: 32,
      email: 'johndoe@example.com',
      url: ''
    }

    json.url = text

    setResult(json)
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
