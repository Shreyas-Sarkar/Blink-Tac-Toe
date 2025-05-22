import { useState } from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCategories, setPlayerCategories] = useState({});
  const [score, setScore] = useState({
    player1: 0,
    player2: 0
  });


  const startGame = (p1Category, p2Category) => {
    setPlayerCategories({ player1: p1Category, player2: p2Category });
    setGameStarted(true);
  };

  const restartGame = () => {
  setPlayerCategories({});
  setGameStarted(false);
};


  return (
    <div className="app">
      {!gameStarted ? (
        <LandingPage onStart={startGame} />
      ) : (
        <GameBoard
        playerCategories={playerCategories}
        onRestart={restartGame}
        score={score}
        setScore={setScore}
        />
      )}
    </div>
  );
}

export default App;
