import { iResult } from '../types'

const Display = ({ result }: { result: iResult }) => {
  return <div>{result && <pre>{JSON.stringify(result, null, 2)}</pre>}</div>
}

export default Display
