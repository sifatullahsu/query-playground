import React from 'react'

const TabHeading = ({ tab, setTab }: { tab: number; setTab: React.Dispatch<number> }) => {
  return (
    <div role="tablist" className="tabs tabs-boxed inline-block bg-accent p-0 mb-5">
      <a role="tab" className={`tab ${tab === 1 && 'tab-active'}`} onClick={() => setTab(1)}>
        Filtering
      </a>
      <a role="tab" className={`tab ${tab === 2 && 'tab-active'}`} onClick={() => setTab(2)}>
        Pagination
      </a>
      <a role="tab" className={`tab ${tab === 3 && 'tab-active'}`} onClick={() => setTab(3)}>
        Field Selection
      </a>
      <a role="tab" className={`tab ${tab === 4 && 'tab-active'}`} onClick={() => setTab(4)}>
        Population
      </a>
    </div>
  )
}

export default TabHeading
