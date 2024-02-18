import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { iEndpoint } from '../types'
import Package from './Package'
import TabContent from './TabContent'
import TabHeading from './TabHeading'

const Extender = ({ endpoint }: { endpoint: iEndpoint }) => {
  const [open, setOpen] = useState(true)
  const [tab, setTab] = useState(1)

  return (
    <div>
      {open && (
        <div className="text-accent-content">
          <div className="font-semibold mt-5 mb-2">Example queries:</div>
          <TabHeading tab={tab} setTab={setTab} />
          <TabContent tab={tab} endpoint={endpoint} />

          <div className="font-semibold mt-5 mb-2">Package info:</div>
          <Package />
        </div>
      )}
      <div className="flex justify-center">
        {open ? (
          <FaAngleUp className="example-icon" onClick={() => setOpen(false)} />
        ) : (
          <FaAngleDown className="example-icon" onClick={() => setOpen(true)} />
        )}
      </div>
    </div>
  )
}

export default Extender
