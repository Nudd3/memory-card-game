import './App.scss';
import Header from './components/Header'
import Main from './components/Main';
import React, { useEffect, useState } from 'react';
const App = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const currentScoreUpdater = () => {
    setCurrentScore(currentScore => currentScore + 1);
  }

  const highScoreUpdater = () => {
    setHighScore(currentScore);
  }

  useEffect(() => {
    console.log(currentScore)
  }, [currentScore]);

  return (
    <div className="app">
      <Header currentScore={currentScore} highScore={highScore}/>
      <Main currentScoreUpdater={currentScoreUpdater}/>
    </div>
  );
}

export default App;
