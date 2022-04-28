import React from 'react'

const Board = () => {
  return (
    <div className="tic-tac-board">
     Tic Tac Board
     <h3>How do you want to play?</h3>
     <div className="player-mode">
       <div className="one-player">One Player</div>
       <div className="two-player">Two Player</div>
     </div>
    </div>
  )
}

export default Board
