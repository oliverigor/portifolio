import React, { useState } from "react"
import "./App.css"
import "font-awesome/css/font-awesome.min.css"

import Messenger from "./messenger.js"
import RocketComponent from "./components/RocketComponent"
import Footer from "./components/Footer"
import Messages from "./messages.js"
import {
  Computer,
  Skills,
  Projects,
  Current,
  Like,
  Letter,
  Myself,
} from "./images"
import AtomComponent from "./components/AtomComponent"

const App = () => {
  const [language, setLanguage] = useState("en-US")

  const languageEN = () => setLanguage("en-US")
  const languagePT = () => setLanguage("pt-BR")
  const PageLanguage = Messages[language]

  return (
    <div className="App">
      <div className="App-Louco">
        <img alt="selfie" className="self-photo" src={Myself} width={200} />
        <h1 className="App-title">Igor Martins</h1>
      </div>

      <div style={{ height: "80px" }}>
        <div className="App-intro" style={{ color: "#bbb" }}>
          <Messenger
            news={[
              `${PageLanguage.presentation1}`,
              `${PageLanguage.presentation2}`,
              `${PageLanguage.presentation3}`,
              `${PageLanguage.presentation4}`,
              `${PageLanguage.presentation5}`,
            ]}
          />
        </div>
      </div>
      <div className="align-center">
        <button className=" btn-lang" onClick={languageEN}>
          <span>en-US.</span>
        </button>
        <button className="btn-lang" onClick={languagePT}>
          <span>pt-BR.</span>
        </button>
      </div>
      <div className="skill_set">
        <div className="skill_box">
          <img alt="computer" src={Computer} className="img-project" />
          <div>
            <h1 className="title">{PageLanguage.title1}</h1>
            <h2 className="text_box">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.reklaimyours.com/"
              >
                Reklaim
              </a>
              {", "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.alterbank.com.br/"
              >
                AlterBank
              </a>{" "}
              {PageLanguage.message13}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.liva.vc"
              >
                Liva
              </a>
              , {PageLanguage.message1}
              {PageLanguage.message2} <b>{PageLanguage.message3}</b>
            </h2>
          </div>
        </div>
        <AtomComponent />
        <div className="skill_box">
          <img alt="computer" src={Projects} className="img-project-fun" />
          <div>
            <h1 className="title">Fun projects</h1>
            <h2 className="text_box">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/oliverigor/OliverMarketPlace"
              >
                OliverMarketPlace
              </a>{" "}
              - {PageLanguage.message14} NodeJs, MongoDB, Docker{" "}
              {PageLanguage.message13} Nodemailer.
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/oliverigor/BarberPoint"
              >
                BarberPoint
              </a>{" "}
              - {PageLanguage.message14} NodeJs, Sequelize, Docker{" "}
              {PageLanguage.message13} Nunjucks.
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/oliverigor/FullStackJsAppUpload-frontend"
              >
                UploadApp
              </a>{" "}
              - {PageLanguage.message14} ReactJs, React-Native{" "}
              {PageLanguage.message13} NodeJs.
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/oliverigor/twitter-like"
              >
                Twitter-like
              </a>{" "}
              - {PageLanguage.message14} ReactJs, React-Native{" "}
              {PageLanguage.message13} NodeJs.
              <br />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/oliverigor/OliverGitHubFavorites-React-Redux"
              >
                GitFavorites
              </a>{" "}
              - {PageLanguage.message14} ReactJs, Redux {PageLanguage.message13}{" "}
              Redux-Saga.
            </h2>
          </div>
        </div>
        <div className="skill_box">
          <img alt="skills" src={Skills} className="img-skills" />
          <div>
            <h1 className="title">{PageLanguage.title2}</h1>
            <h2 className="text_box">
              C, C++, Lua, NCL, Java, ActionScript 3.0, Python, HTML, CSS, Jade,
              Sass, JavaScript, JQuery, ReactJS, React Router, React Native,
              Redux, Aws, Docker, D3.js, Express.js, Angular, Flutter,{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`${PageLanguage.mongoP}`}
              >
                MongoDBPython
              </a>
              ,{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`${PageLanguage.mongoJS}`}
              >
                MongoDBJS
              </a>
              , Git.
            </h2>
          </div>
        </div>
        <div className="skill_box">
          <img alt="current" src={Current} className="img-current" />
          <div>
            <h1 className="title">{PageLanguage.title3}</h1>
            <h2 className="text_box">
              {PageLanguage.message4}{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://shopify.com/"
              >
                Shopify
              </a>{" "}
              {PageLanguage.message5}
            </h2>
          </div>
        </div>

        <div className="skill_box">
          <img alt="like" src={Like} className="img-like" />
          <div>
            <h1 className="title">{PageLanguage.title4}</h1>
            <h2 className="text_box">
              {PageLanguage.message6} <i>{PageLanguage.message7}</i>.{" "}
              {PageLanguage.message8}
            </h2>
          </div>
        </div>
        <RocketComponent />
        {/* <div className='skill_box'>
          <img alt='job' src={Job} className='img-job' />
          <div>
            <h1 className='title'>{PageLanguage.title5}</h1>
            <h2 className='text_box'>
              {PageLanguage.message9} <br />
              <a rel='noopener noreferrer' target='_blank' href={`${PageLanguage.link}`}>
                {PageLanguage.message10}
              </a>
            </h2>
          </div>
        </div> */}
        <div className="skill_box">
          <img alt="letter" src={Letter} className="img-email" />
          <div>
            <h1 className="title">{PageLanguage.title6}</h1>
            <h2 className="text_box">
              {PageLanguage.message11} <br /> {PageLanguage.message12}.
            </h2>
          </div>
        </div>

        <div className="form_louco">
          <form
            action="https://formspree.io/m.oliverunb@gmail.com"
            method="POST"
          >
            <div className="form_class">
              <input
                type="text"
                name="name"
                placeholder={`${PageLanguage.placeholder1}`}
                className="input-text"
              />
            </div>
            <div className="form_class">
              <input
                type="email"
                name="_replyto"
                placeholder={`${PageLanguage.placeholder2}`}
                className="input-text"
              />
            </div>
            <div className="form_class_message">
              <input
                type="text"
                name="message"
                placeholder={`${PageLanguage.placeholder3}`}
                className="input-text"
              />
            </div>
            <div className="form_class padding8">
              <button className="learn-more" type="submit">
                <div className="circle">
                  <span className="icon arrow" />
                </div>
                <p className="button-text">{`${PageLanguage.placeholder4}`}</p>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
