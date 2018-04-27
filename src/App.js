import React, { Component } from 'react';
import './App.css';
import Messenger from './messenger.js'
import Photo from './photo.png'
import Skills from './skills.svg'
import Computer from './computer.svg'
import Job from './job.svg'
import Letter from './letter.svg'
import Like from './like.svg'
import Current from './curriculum.svg'



class App extends Component {
  render() {
    return (
      <div className="App">



        <div className="App-Louco">
          <img className="self-photo" src={Photo} width={150}/>
          <h1 className="App-title">Igor Martins</h1>
        </div>

        <div style={{height:'80px'}}>
          <p className="App-intro">
          <Messenger news={['Olá', 'me chamo igor', 'sou engenheiro automotivo ', 'mas agora', 'sou aspirante a desenvolvedor full-stack!!']}/>
          </p>
        </div>


        <div className="skill_set">

          <div className="skill_box">
            <img src={Computer} width={100} />
            <div>
              <h1 className="title">PROJETOS</h1>
              <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
            </div>
          </div>
          <div className="skill_box">
            <img src={Skills} width={100} />
              <div>
                <h1 className="title">HABILIDADES</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Current} width={100} />
              <div>
                <h1 className="title">TRABALHO ATUAL</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Like} width={100} />
              <div>
                <h1 className="title">O QUE EU CURTO</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Job} width={100} />
              <div>
                <h1 className="title">QUER FAZER UMA PROPOSTA?</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Letter} width={100} />
              <div>
                <h1 className="title">DEIXE SUA MENSAGEM</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
                  {/* <div >
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
                  </div> */}
              </div>
          </div>

        </div>

        <div className="footer">

          <small>
            <h4>MADE BY ME...YES...IGOR</h4>
          </small>

        </div>
      </div>
    );
  }
}

export default App;
