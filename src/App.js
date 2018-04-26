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

        <div style={{height:'80px'}}>
          <p className="App-intro">
          <Messenger news={['Olá', 'me chamo igor', 'sou engenheiro automotivo ', 'mas agora', 'sou aspirante a desenvolvedor full-stack!!']}/>
          </p>
        </div>


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
          <div style={{display: 'flex', justifyContent:'center'}}>
            <div style={{marginRight:'20px'}}>
            <img src={Letter} width={100} />
            </div>
            <div>
            <form action="https://formspree.io/m.oliverunb@gmail.com" method="POST">

              <div>
                <input type="text" name="name" placeholder="Nome"/>
              </div>
              <div>
                <input type="email" name="_replyto" placeholder="Email"/>
              </div>
              <div>
                <input type="text" name="message" placeholder="Mensagem"/>
              </div>
              <div>
                <input type="submit" value="Send"/>
              </div>
            </form>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
