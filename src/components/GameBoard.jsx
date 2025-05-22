import React, { useState } from 'react';
import '../styles/GameBoard.css';

function GameBoard({ playerCategories, onRestart }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('player1');
  const [history, setHistory] = useState({ player1: [], player2: [] });
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);


  const emojiMap = {
    Animals: ['🐶', '🐱', '🐵', '🐰'],
    Food: ['🍕', '🍟', '🍔', '🍩'],
    Sports: ['⚽', '🏀', '🏈', '🎾'],
  };

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const getRandomEmoji = (categoryName) => {
    const list = emojiMap[categoryName];
    return list[Math.floor(Math.random() * list.length)];
  };

  const checkWinner = (newBoard, currentPlayer) => {
    const playerEmojis = emojiMap[playerCategories[currentPlayer]];
    return winningCombos.find(combo =>
      combo.every(index => playerEmojis.includes(newBoard[index]))
    );
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    const emoji = getRandomEmoji(playerCategories[turn]);

    const newHistory = { ...history };
    const playerHistory = newHistory[turn];

    if (playerHistory.length === 3) {
      const oldestIndex = playerHistory.shift();
      newBoard[oldestIndex] = null;
    }

    newBoard[index] = emoji;
    playerHistory.push(index);

    setBoard(newBoard);
    setHistory(newHistory);

    const winCombo = checkWinner(newBoard, turn);
    if (winCombo) {
    setWinner(turn);
    setWinningCells(winCombo);
    return;
    }
    setTurn(turn === 'player1' ? 'player2' : 'player1');
  };



  return (
    <div className="game-container">
    {winner ? (
        <>
        <h2>{winner === 'player1' ? 'Player 1' : 'Player 2'} Wins! 🎉</h2>
        </>
    ) : (
        <h2>{turn === 'player1' ? 'Player 1' : 'Player 2'}'s Turn</h2>
    )}

    <div className="game-board">
        {board.map((cell, index) => (
        <div
            key={index}
            className={`cell ${winningCells.includes(index) ? 'winner-cell' : ''}`}
            onClick={() => handleCellClick(index)}
        >
            <span className="emoji">{cell}</span>
        </div>
        ))}
    </div>

    {winner && (
        <div className="game-actions">
        <button className="primary-button" onClick={onRestart}>
            Play Again
        </button>
        </div>
    )}
    </div>
  );
}

export default GameBoard;
