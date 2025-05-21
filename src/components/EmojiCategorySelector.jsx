import React from 'react';

function EmojiCategorySelector({ player, categories, selected, setSelected }) {
  return (
    <div className="selector">
      <h3>{player}</h3>
      {Object.entries(categories).map(([name, emojis]) => (
        <button
          key={name}
          className={`category-button ${selected === name ? 'selected' : ''}`}
          onClick={() => setSelected(name)}
        >
          {name}: {emojis.join(' ')}
        </button>
      ))}
    </div>
  );
}

export default EmojiCategorySelector;