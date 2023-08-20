// game.jsx
import React from 'react';
import Board from './board';
import { win, checkForWinner, isSuperset } from '../utils/winning';

const Game = () => {
return (
    <div className="game">
    <Board></Board>
    </div>
);
};

export default Game;