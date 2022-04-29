import React from 'react'
import ActiveArea from './ActiveArea'

const Shell = ({finishPlayerSelection, setFinishPlayerSelection}) => {
  return (
    <div className="shell">
      <ActiveArea 
        finishPlayerSelection = {finishPlayerSelection}
        setFinishPlayerSelection = {setFinishPlayerSelection}
      />
    </div>
  )
}

export default Shell
