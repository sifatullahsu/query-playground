import React from 'react'

const Item = ({ children, error = false }: { children: React.ReactNode; error?: boolean }) => {
  return (
    <div className={`badge ${error ? 'badge-error' : 'badge-success'} badge-outline mr-3 mb-3`}>
      {children}
    </div>
  )
}

export default Item
