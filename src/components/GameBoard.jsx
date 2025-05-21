import React, { useState } from 'react';
import '../styles/GameBoard.css';

const initialBoard = Array(9).fill(null);

function GameBoard() {
  const [board, setBoard] = useState(initialBoard);

  const handleCellClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = '❓'; // placeholder for now
    setBoard(newBoard);
  };

  return (
    <>
    <h1>Blink Tic Tac Toe</h1>
    <div className="game-board">
      {board.map((cell, index) => (
        <div
          key={index}
          className="cell"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
    </>
  );
}

export default GameBoard;