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
          <Messenger news={['Fala veei', 'me chamo igor', 'sou engenheiro automotivo ', 'mas agora', 'sou aspirante a desenvolvedor full-stack!!']}/>
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
                <h2 className="text_box">C, C++, Lua, NCL, Java, ActionScript 3.0, Python, HTML, CSS, Jade, Sass, JavaScript, JQuery, ReactJS, React Router, React Native, Redux, D3.js, Node.js, Angular, Express, MongoDB, Git</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Current} width={100} />
              <div>
                <h1 className="title">TRABALHO ATUAL</h1>
                <h2 className="text_box">Atualmente estou trabalhando na Secretaria de Educação de Brasília como Web designer e desenvolvedor Front-end e também sou desenvolvedor na <a href="https://mouselabs.com.br/">MouseLabs.</a></h2>
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
                <h2 className="text_box">
                  Eu adoraria trabalhar com vocês em projetos UI/UX para Web ou Mobile. <br/>
                  <a href="https://docs.google.com/document/d/1CpUH9MoX992QVNsFsSqxNhiw7VePwlzrjpe4lwsX7A4/edit?usp=sharing">Currículo</a></h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Letter} width={100} />
              <div>
                <h1 className="title">DEIXE SUA MENSAGEM</h1>
                <h2 className="text_box">lorem ipsum eh meu bigulao eh nois porra ehuashauehasu, valeu sociedade capitalista, odeio capital inicial e é nois</h2>
              </div>

          </div>


            <div className="form_louco">
              <form action="https://formspree.io/m.oliverunb@gmail.com" method="POST">

                <div className="form_class">
                  <input type="text" name="name" placeholder="Nome"/>
                </div>
                <div className="form_class">
                  <input type="email" name="_replyto" placeholder="Email"/>
                </div>
                <div className="form_class">
                  <input type="text" name="message" placeholder="Mensagem"/>
                </div>
                <div className="form_class">
                  <button className="btn-submit" type="submit" value="Send">
                    <h5 style={{verticalAlign:'middle',margin:'0px'}}>Enviar</h5>
                  </button>
                </div>
              </form>
          </div>



        </div>

        <div className="footer">

          <small>
            <p>MADE BY ME...YES...<a href="https://github.com/oliverigor">IGOR</a></p>
          </small>

        </div>
      </div>
    );
  }
}

export default App;
