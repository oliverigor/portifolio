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
import Myself from './igorphoto.png'


class App extends Component {
  render() {
    return (
      <div className="App">



        <div className="App-Louco">
          <img className="self-photo" src={Myself} width={200}/>
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
              <h2 className="text_box"><a href="https://www.paguecripto.com/">PagueCripto</a>, <a href="http://www.sage.se.df.gov.br/autenticacao/usuarios/sign_in">SAGE</a> são alguns de meus trabalhos mais recentes. Conto também com alguns projetos da plataforma <a href="https://www.freecodecamp.org">FreeCodeCamp</a> para obter os certificados, porém estão <b>em progresso...</b></h2>
            </div>
          </div>
          <div className="skill_box">
            <img src={Skills} width={100} />
              <div>
                <h1 className="title">HABILIDADES</h1>
                <h2 className="text_box">C, C++, Lua, NCL, Java, ActionScript 3.0, Python, HTML, CSS, Jade, Sass, JavaScript, JQuery, ReactJS, React Router, React Native, Redux, D3.js, Node.js, Angular, Express, MongoDB, Git.</h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Current} width={100} />
              <div>
                <h1 className="title">TRABALHO ATUAL</h1>
                <h2 className="text_box">Atualmente estou trabalhando na Secretaria de Educação de Brasília como Web designer e desenvolvedor Front-end e também sou desenvolvedor na <a href="https://mouselabs.com.br/"> MouseLabs.</a></h2>
              </div>
          </div>
          <div className="skill_box">
            <img src={Like} width={100} />
              <div>
                <h1 className="title">O QUE EU CURTO</h1>
                <h2 className="text_box">Além de programação front-end, meus interesses atuais são inteligência artificial e <i>machine learning</i>. Colocando a tecnologia de lado eu amo música, tudo que envolve produção musical, video games e cinema, basicamente eu vivo e consumo essas coisas.</h2>
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
                <h2 className="text_box">Sinta-se livre para me deixar algumas palavras, posso te retornar assim que possível. <br/> Beijos e é nois.</h2>
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
