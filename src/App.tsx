import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainContainer } from './components/main-container/main-container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainContainer />
      </header>
    </div>
  );
}

export default App;
