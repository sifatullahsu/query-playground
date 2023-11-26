import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { anOldHope, monoBlue as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { bookConstant } from '../data'
import { iResult } from '../types'

const Display = ({ result }: { result: iResult }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="col-span-2">
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
              {JSON.stringify(result.data, null, 2)}
            </ReactSyntaxHighlighter>
          </>
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
          {bookConstant}
        </ReactSyntaxHighlighter>
      </div>
    </div>
  )
}

export default Display
