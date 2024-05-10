import React from 'react';
import '../App.css';

const RestartButton = ({ handleRestart }) => {
  return (
    <div className="restart-button-container">
      <button className="restart-button" onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default RestartButton;
