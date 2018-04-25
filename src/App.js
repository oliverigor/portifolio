import React, { Component } from 'react';
import './App.css';
import Messenger from './messenger.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Igor Martins</h1>
        </header>
        <p className="App-intro">
        <Messenger news={['Olá', 'Me chamo igor', 'Era engenheiro automotivo', 'Porém agora sou aspirante a desenvolvedor Full-stack']}/>
        </p>
      </div>
    );
  }
}

export default App;
