import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const currentScoreUpdater = () => {
    setCurrentScore((currentScore) => currentScore + 1);

    if (currentScore > highScore) {
      highScoreUpdater();
    }
  };

  const highScoreUpdater = () => {
    setHighScore(currentScore);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  useEffect(() => {
    if (currentScore > highScore) {
      highScoreUpdater();
    }
  });

  return (
    <div className='app'>
      <Header currentScore={currentScore} highScore={highScore} />
      <Main currentScoreUpdater={currentScoreUpdater} resetScore={resetScore} />
    </div>
  );
};

export default App;
