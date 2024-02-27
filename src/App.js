import React from 'react';
import Title from './Title';
import WaitlistButton from './WaitlistButton';
import BackgroundVideo from './BackgroundVideo';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Title />
      <Footer />
    </div>
  );
}

export default App;
