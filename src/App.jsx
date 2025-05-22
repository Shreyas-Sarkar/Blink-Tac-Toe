import { useState, useRef, useEffect } from 'react';
import './styles/App.css';
import LandingPage from './components/LandingPage';
import GameBoard from './components/GameBoard';
import MuteToggle from './components/MuteToggle';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerCategories, setPlayerCategories] = useState({});
  const [score, setScore] = useState({ player1: 0, player2: 0 });
  const [muted, setMuted] = useState(false);

  const bgAudioRef = useRef(null);

  useEffect(() => {
    const tryPlay = () => {
      if (bgAudioRef.current && !muted) {
        bgAudioRef.current.loop = true;
        bgAudioRef.current.volume = 0.3;
        bgAudioRef.current.play().catch(() => {});
      }
    };

    tryPlay();

    const listener = () => tryPlay();
    window.addEventListener('pointerdown', listener, { once: true });

    return () => {
      window.removeEventListener('pointerdown', listener);
    };
  }, [muted]);

  useEffect(() => {
    if (bgAudioRef.current) {
      if (muted) {
        bgAudioRef.current.pause();
      } else {
        bgAudioRef.current.play().catch(() => {});
      }
    }
  }, [muted]);

  const startGame = (p1Category, p2Category) => {
    setPlayerCategories({ player1: p1Category, player2: p2Category });
    setGameStarted(true);
  };

  const restartGame = () => {
    setPlayerCategories({});
    setGameStarted(false);
  };

  return (
    <>
      <audio ref={bgAudioRef} src="/sounds/bg-music.mp3" preload="auto" />
      <div className="app">
        {!gameStarted ? (
          <LandingPage
            onStart={startGame}
            muted={muted}
            setMuted={setMuted}
          />
        ) : (
          <GameBoard
            playerCategories={playerCategories}
            onRestart={restartGame}
            score={score}
            setScore={setScore}
            muted={muted}
            setMuted={setMuted}
          />
        )}
      </div>
    </>
  );
}

export default App;
