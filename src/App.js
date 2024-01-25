import React from 'react';
import Title from './Title';
import EmailInput from './EmailInput';
import BackgroundVideo from './BackgroundVideo';
import './App.css';

function App() {
  return (
    <div className="app">
      <BackgroundVideo />
      <Title />
      <EmailInput />
    </div>
  );
}

export default App;
