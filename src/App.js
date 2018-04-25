import React, { Component } from 'react';
import './App.css';
import Messenger from './messenger.js'
import Photo from './photo.png'
import Skills from './skills.svg'
import Computer from './computer.svg'
import Job from './job.svg'
import Letter from './letter.svg'
import Like from './like.svg'

class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="App-Louco">
          <img className="self-photo" src={Photo} width={200}/>
          <h1 className="App-title">Igor Martins</h1>
          </div>

        <p className="App-intro">
        <Messenger news={['Olá', 'Me chamo igor', 'Era engenheiro automotivo', 'Porém agora sou aspirante a desenvolvedor Full-stack']}/>
        </p>

        <div className="skillset">
          <div>
            <img src={Skills} width={100} />
          </div>
          <div>
            <img src={Computer} width={100} />
          </div>
          <div>
            <img src={Job} width={100} />
          </div>
          <div>
            <img src={Like} width={100} />
          </div>
          <div>
            <img src={Letter} width={100} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
