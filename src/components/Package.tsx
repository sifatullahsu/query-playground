const Package = ({
  documentation = 'https://www.npmjs.com/package/mongoose-query-maker'
}: {
  documentation?: string
}) => {
  return (
    <div className="space-x-3">
      <span className="text-xs mt-5 opacity-50">npm i mongoose-query-maker</span>
      <a
        href={documentation}
        target="_blank"
        className="btn btn-secondary btn-sm capitalize text-xs rounded-lg"
      >
        Documentation
      </a>
      {/* <a href={tutorial} target="_blank" className="btn btn-secondary btn-sm capitalize text-xs rounded-lg">
        Video Tutorial
      </a>
      <a href={tutorial} target="_blank" className="btn btn-secondary btn-sm capitalize text-xs rounded-lg">
        ER Diagram
      </a> */}
    </div>
  )
}

export default Package
