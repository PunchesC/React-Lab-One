import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Vote from './components/Vote';


function App() {
  return (
    <div className="App">
      <Header />
      <AdDesigner />
      <Vote />
    </div>
  );
}

export default App;
