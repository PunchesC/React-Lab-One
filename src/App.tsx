import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Vote from './components/Vote';
import Ad from './components/Ad';


function App() {
  return (
    <div className="App">
      <Header user="Curtis"/>
      <div className= "body">
        <section>
      {/* <Ad flavor="Chocolate" fontSize={11} darkTheme={true}/>
      <Ad flavor="Vanilla" fontSize={25} darkTheme={false}/>
      <Ad flavor="Strawberry" fontSize={20} darkTheme={true}/> */}
      <AdDesigner />
      </section>
      <section>
      <Vote />
      </section>
      </div>
    </div>
  );
}

export default App;
