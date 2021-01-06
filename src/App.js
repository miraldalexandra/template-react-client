import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import Routes from './Routes';
import './style/App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>React JS Template</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Navbar />
      <Routes />
    </div>
    </BrowserRouter>
  );
}

export default App;
