import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messenger from './messenger.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="messenger">Welcome to React</div>
        </header>
        <p className="App-intro">
        <Messenger news={['Olá', 'Me chamo igor', 'Era engenheiro automotivo', 'Porém agora sou aspirante a desenvolvedor Full-stack']}/>
        </p>
      </div>
    );
  }
}

export default App;
