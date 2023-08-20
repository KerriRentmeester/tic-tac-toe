import React, { useState } from 'react';
import Square from './square';

const Board = () => {
    // 1st player is X ie 1
    // State keeps track of next player and gameState
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    let status = `Winner is ${checkForWinner(gameState)}`;
  
    // Conditional logic sets a variable to either 'Player O' or  'Player X'
    let playerTurn = `Next Player: ${player == '0' ? 'Player O' : 'Player X'}`;
    console.log(`We have a winner ${status}`);
  
    const takeTurn = (id) => {
      setGameState([...gameState, { id: id, player: player }]);
      setPlayer((player + 1) % 2); // get next player
      return player;
    };

    function renderSquare(i) {
      // Pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i}></Square>;
    }
  
    return (
      <div className="game-board">
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="grid-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info">
          <h1 id="turn">{playerTurn}</h1>
          <h1>{status}</h1>
        </div>
      </div>
    );
  };

  export default Board;