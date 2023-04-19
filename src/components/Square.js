import '../styles.css';
import React from 'react';


function Square({value, onSquareClick}) {
    return (
      <button className="square-button" onClick={onSquareClick}>
        {value}
      </button>
    );
}

export default Square;
