import React, {useState} from 'react'

const Board = () => {
  const [finishPlayerSelection, setFinishPlayerSelection] = useState(false)
  const completePlayerSelection = (e) => {
    console.log(e.target.innerText)
    setFinishPlayerSelection(true)
  }

  const resetPlayerSelection = (e) => {
    console.log(e.target.innerText)
    setFinishPlayerSelection(false)
  }
  return (
      <div className="tic-tac-board">
        {
          (!finishPlayerSelection) ?
          <div>
            Tic Tac Board
            <h3>How do you want to play?</h3>
            <div className="player-mode">
              <div className="one-player" 
                onClick = {completePlayerSelection}
              > One Player
              </div>
              <div className="two-player"
                onClick = {completePlayerSelection}
              >Two Player
              </div>
            </div>
          </div>
          : ""
        }
        {
          (finishPlayerSelection) ?
            <div>
              <h3>Would you like to be X or O?</h3>
              <div className="options">
                <div className="option-x">X</div>
                <div className="option-o">O</div>
              </div>
              <h3 className="go-back-button"
                onClick={resetPlayerSelection}
              >Back
              </h3>
           </div> : ""
        }
     </div>
  )
}

export default Board
