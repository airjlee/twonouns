import React from 'react';
import Title from './Title';
import WaitlistButton from './WaitlistButton';
import BackgroundVideo from './BackgroundVideo';
import './App.css';

function App() {
  return (
    <div className="app">
      <BackgroundVideo />
      <Title />
      <WaitlistButton />
    </div>
  );
}

export default App;
