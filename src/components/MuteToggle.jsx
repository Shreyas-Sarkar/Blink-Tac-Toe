import React from 'react';
import { FiVolumeX, FiVolume2 } from 'react-icons/fi';
import '../styles/MuteToggle.css';

function MuteToggle({ muted, setMuted, position = 'bottom-left' }) {

  return (
    <button
      className={`mute-btn icon-btn ${position}`}
      onClick={() => setMuted(m => !m)}
      aria-label={muted ? 'Unmute Music' : 'Mute Music'}
    >
      {muted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
    </button>
  );
}

export default MuteToggle;
