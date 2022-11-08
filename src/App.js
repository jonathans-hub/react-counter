import React from 'react'
import ClassCounter from './ClassCounter'
import FunctionCounter from './FunctionCounter'

export default function App () {
  return (
    <div style={{display: 'flex', alignItems: 'center', marginTop:120 +'px', flexDirection: 'column'}}>
      <ClassCounter/>
      <FunctionCounter/>
    </div>
  )
}

