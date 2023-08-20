import React, { useState } from 'react';

const Square = ({ takeTurn, id }) => {  // id is the square's number
    const mark = ['O', 'X', '+'];
    // filled tells you if square has been filled
    // tik tells you symbol in square (same as player)
    // You call takeTurn to tell Parent that the square has been filled
    const [filled, setFilled] = React.useState(false);
    const [tik, setTik] = React.useState(2);

    return (
      <button
        // Update the return statement below to add css classes for symbol colors red & white
        className={tik == '1' ? 'red' : 'white'}
        onClick={() => {
          setTik(takeTurn(id));
          setFilled(true);
          console.log(`Square: ${id} filled by player : ${tik}`);
        }}
      >
        <h1>{mark[tik]}</h1>
      </button>
    );
  };
  
  export default Square;