import React, { Component } from 'react';
import './App.css';
import Messenger from './messenger.js'
import Photo from './photo.png'

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="App-Louco">
          <img src={Photo} width={200}/>
          <h1 className="App-title">Igor Martins</h1>
          </div>

        <p className="App-intro">
        <Messenger news={['Olá', 'Me chamo igor', 'Era engenheiro automotivo', 'Porém agora sou aspirante a desenvolvedor Full-stack']}/>
        </p>
      </div>
    );
  }
}

export default App;
