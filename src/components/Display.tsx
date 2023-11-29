import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, monoBlue as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { bookConstant, orderConstant } from '../data'
import { iEndpoint, iQueryResult, iResult } from '../types'

type iProps = {
  result: iResult
  queryResult: iQueryResult
  endpoint: iEndpoint
}

const Display = ({ result, queryResult, endpoint }: iProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="col-span1">
        {result && (
          <>
            {/* <div className="text-sm text-accent pl-2">Last fetched: 1 min ago</div> */}
            <ReactSyntaxHighlighter
              language="json"
              style={theme}
              customStyle={{
                background: 'transparent',
                fontSize: '14px'
              }}
            >
              {JSON.stringify(result, null, 2)}
            </ReactSyntaxHighlighter>
          </>
        )}
      </div>
      <div>
        {queryResult && (
          <ReactSyntaxHighlighter
            language="json"
            style={anOldHope}
            customStyle={{
              background: 'rgb(38, 38, 38)',
              fontSize: '14px',
              borderRadius: '14px',
              padding: '25px 20px'
            }}
          >
            {JSON.stringify(queryResult, null, 2)}
          </ReactSyntaxHighlighter>
        )}
      </div>
      <div>
        <ReactSyntaxHighlighter
          language="javascript"
          style={anOldHope}
          customStyle={{
            background: 'rgb(38, 38, 38)',
            fontSize: '14px',
            borderRadius: '14px'
          }}
        >
          {endpoint === 'books' ? bookConstant : endpoint === 'orders' ? orderConstant : ''}
        </ReactSyntaxHighlighter>
      </div>
    </div>
  )
}

export default Display
