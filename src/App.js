import './App.scss';
import Header from './components/Header'
import Main from './components/Main';
import React, { useState } from 'react';
const App = () => {

  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const currentScoreUpdater = () => {
    setCurrentScore(currentScore + 1);
  }

  const highScoreUpdater = () => {
    setHighScore(currentScore);
  }

  return (
    <div className="app">
      <Header currentScore={currentScore} highScore={highScore}/>
      <Main />
    </div>
  );
}

export default App;
