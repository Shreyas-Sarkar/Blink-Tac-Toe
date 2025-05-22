import React, { useState } from 'react';
import '../styles/LandingPage.css';
import EmojiCategorySelector from './EmojiCategorySelector';
import MuteToggle from './MuteToggle';
import '../styles/MuteToggle.css';

const allCategories = {
  Animals: ['🐶', '🐱', '🐵', '🐰'],
  Food: ['🍕', '🍟', '🍔', '🍩'],
  Sports: ['⚽', '🏀', '🏈', '🎾'],
};

function LandingPage({ onStart, muted, setMuted }) {
  const [player1Category, setPlayer1Category] = useState('');
  const [player2Category, setPlayer2Category] = useState('');

  const canStart =
    player1Category && player2Category && player1Category !== player2Category;

  return (
    <div className="landing-page">
      <div className="landing-inner">
        <h1>Blink Tac Toe</h1>

        <section className="selectors">
          <EmojiCategorySelector
            player="Player 1"
            categories={allCategories}
            selected={player1Category}
            setSelected={setPlayer1Category}
          />
          <EmojiCategorySelector
            player="Player 2"
            categories={allCategories}
            selected={player2Category}
            setSelected={setPlayer2Category}
          />
        </section>

        <section className="rules">
          <h2>About the Game</h2>
          <ul>
            <li>Pick a unique emoji category for each player to start the game.</li>
            <li>You’ll get random emojis from your category to place on the board.</li>
            <li>Only 3 emojis per player are allowed on the board.</li>
            <li>The oldest emoji disappears when placing a new one.</li>
            <li>First to align 3 of their emojis wins!</li>
          </ul>
        </section>

        <button
          disabled={!canStart}
          onClick={() => onStart(player1Category, player2Category)}
        >
          Start Game
        </button>
      </div>
      <MuteToggle muted={muted} setMuted={setMuted} />
    </div>
  );
}

export default LandingPage;
