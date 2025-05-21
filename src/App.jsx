import { useState } from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCategories, setPlayerCategories] = useState({});

  const startGame = (p1Category, p2Category) => {
    setPlayerCategories({ player1: p1Category, player2: p2Category });
    setGameStarted(true);
  };

  return (
    <div className="app">
      {!gameStarted ? (
        <LandingPage onStart={startGame} />
      ) : (
        <GameBoard playerCategories={playerCategories} />
      )}
    </div>
  );
}

export default App;