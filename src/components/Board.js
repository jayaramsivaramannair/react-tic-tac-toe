import React, {useState} from 'react'
import Shell from './Shell'


const Board = () => {
  const [finishPlayerSelection, setFinishPlayerSelection] = useState(false)
  return (
      <div>
        <Shell 
          finishPlayerSelection = {finishPlayerSelection}
          setFinishPlayerSelection = {setFinishPlayerSelection}
        />
     </div>
  )
}

export default Board
