import React, { useState } from 'react'
import './App.css'
import Messenger from './messenger.js'
import Skills from './skills.svg'
import Computer from './computer.svg'
import Job from './job.svg'
import Letter from './letter.svg'
import Like from './like.svg'
import Current from './curriculum.svg'
import Myself from './igorphoto.png'
import Projects from './project.svg'
import 'font-awesome/css/font-awesome.min.css'
import Messages from './messages'

const App = () => {
  const [language, setLanguage] = useState('en-US')

  const languageEN = () => setLanguage('en-US')
  const languagePT = () => setLanguage('pt-BR')
  const PageLanguage = Messages[language]

  return (
    <div className='App'>
      <div className='App-Louco'>
        <img alt='selfie' className='self-photo' src={Myself} width={200} />
        <h1 className='App-title'>Igor Martins</h1>
      </div>

      <div style={{ height: '80px' }}>
        <div className='App-intro' style={{ color: '#bbb' }}>
          <Messenger
            news={[
              `${PageLanguage.presentation1}`,
              `${PageLanguage.presentation2}`,
              `${PageLanguage.presentation3}`,
              `${PageLanguage.presentation4}`,
              `${PageLanguage.presentation5}`
            ]}
          />
        </div>
      </div>
      <div className='align-center'>
        <button className=' btn-lang' onClick={languageEN}>
          <span>en-US.</span>
        </button>
        <button className='btn-lang' onClick={languagePT}>
          <span>pt-BR.</span>
        </button>
      </div>
      <div className='skill_set'>
        <div className='skill_box'>
          <img alt='computer' src={Computer} className='img-project' />
          <div>
            <h1 className='title'>{PageLanguage.title1}</h1>
            <h2 className='text_box'>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://www.alterbank.com.br/'
              >
                AlterBank
              </a>{' '}
              {PageLanguage.message13}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='http://www.liva.vc'
              >
                Liva
              </a>
              , {PageLanguage.message1}
              {PageLanguage.message2} <b>{PageLanguage.message3}</b>
            </h2>
          </div>
        </div>
        <div className='react'>
          <div>
            <svg className='atom' viewBox='0 0 100 100'>
              <defs>
                <filter id='blur' x='-10' y='-10' width='120' height='120'>
                  <feGaussianBlur in='SourceGraphic' stdDeviation='.4' />
                </filter>
                <filter id='blur2' x='-10' y='-10' width='120' height='120'>
                  <feGaussianBlur in='SourceGraphic' stdDeviation='3' />
                </filter>
              </defs>
              <g filter='url(#blur2)'>
                <circle className='kern' cx='50' cy='50' r='2' />
              </g>
              <circle className='kern' cx='50' cy='50' r='2' />
              <g className='lines'>
                <path
                  className=''
                  d='M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50'
                />
                <path
                  className=''
                  d='M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5'
                />
                <path
                  className=''
                  d='M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5'
                />
              </g>
              <g className='electronTails' filter='url(#blur)'>
                <path
                  className='tail tail1'
                  d='M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50'
                />
                <path
                  className='tail tail2'
                  d='M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5'
                />
                <path
                  className='tail tail3'
                  d='M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5'
                />
              </g>
              <g className='electrons'>
                <path
                  className='electron electron1'
                  d='M  57.5,50 57.39,55.21 57.05,60.26 56.5,65 55.75,69.28 54.82,72.98 53.75,75.98 52.57,78.19 51.3,79.54 50,80 48.7,79.54 47.43,78.19 46.25,75.98 45.18,72.98 44.25,69.28 43.5,65 42.95,60.26 42.61,55.21 42.5,50 42.61,44.79 42.95,39.74 43.5,35 44.25,30.72 45.18,27.02 46.25,24.02 47.43,21.81 48.7,20.46 50,20 51.3,20.46 52.57,21.81 53.75,24.02 54.82,27.02 55.75,30.72 56.5,35 57.05,39.74 57.39,44.79 57.5,50'
                />
                <path
                  className='electron electron2'
                  d='M  53.75,56.5 49.18,59 44.64,61.23 40.26,63.13 36.17,64.62 32.51,65.67 29.38,66.24 26.87,66.32 25.07,65.9 24.02,65 23.76,63.64 24.3,61.87 25.63,59.74 27.69,57.32 30.43,54.67 33.76,51.88 37.59,49.03 41.8,46.21 46.25,43.5 50.82,41 55.36,38.77 59.74,36.88 63.83,35.38 67.49,34.33 70.62,33.76 73.13,33.68 74.93,34.1 75.98,35 76.24,36.36 75.7,38.13 74.38,40.26 72.31,42.68 69.57,45.33 66.24,48.12 62.41,50.97 58.2,53.79 53.75,56.5'
                />
                <path
                  className='electron electron3'
                  d='M  53.75,43.5 58.2,46.21 62.41,49.03 66.24,51.88 69.57,54.67 72.31,57.32 74.38,59.74 75.7,61.87 76.24,63.64 75.98,65 74.93,65.9 73.13,66.32 70.63,66.24 67.49,65.67 63.83,64.62 59.74,63.13 55.36,61.23 50.82,59 46.25,56.5 41.8,53.79 37.59,50.97 33.76,48.13 30.43,45.33 27.69,42.68 25.63,40.26 24.3,38.13 23.76,36.36 24.02,35 25.07,34.1 26.87,33.68 29.37,33.76 32.51,34.33 36.17,35.38 40.26,36.87 44.64,38.77 49.18,41 53.75,43.5'
                />
              </g>
            </svg>
          </div>
        </div>
        <div className='skill_box'>
          <img alt='computer' src={Projects} className='img-project-fun' />
          <div>
            <h1 className='title'>Fun projects</h1>
            <h2 className='text_box'>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/oliverigor/OliverMarketPlace'
              >
                OliverMarketPlace
              </a>{' '}
              - {PageLanguage.message14} NodeJs, MongoDB, Docker{' '}
              {PageLanguage.message13} Nodemailer.
              <br />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/oliverigor/BarberPoint'
              >
                BarberPoint
              </a>{' '}
              - {PageLanguage.message14} NodeJs, Sequelize, Docker{' '}
              {PageLanguage.message13} Nunjucks.
              <br />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/oliverigor/FullStackJsAppUpload-frontend'
              >
                UploadApp
              </a>{' '}
              - {PageLanguage.message14} ReactJs, React-Native{' '}
              {PageLanguage.message13} NodeJs.
              <br />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/oliverigor/twitter-like'
              >
                Twitter-like
              </a>{' '}
              - {PageLanguage.message14} ReactJs, React-Native{' '}
              {PageLanguage.message13} NodeJs.
              <br />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/oliverigor/OliverGitHubFavorites-React-Redux'
              >
                GitFavorites
              </a>{' '}
              - {PageLanguage.message14} ReactJs, Redux {PageLanguage.message13}{' '}
              Redux-Saga.
            </h2>
          </div>
        </div>
        <div className='skill_box'>
          <img alt='skills' src={Skills} className='img-skills' />
          <div>
            <h1 className='title'>{PageLanguage.title2}</h1>
            <h2 className='text_box'>
              C, C++, Lua, NCL, Java, ActionScript 3.0, Python, HTML, CSS, Jade,
              Sass, JavaScript, JQuery, ReactJS, React Router, React Native,
              Redux, Aws, Docker, D3.js, Express.js, Angular, Flutter,{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={`${PageLanguage.mongoP}`}
              >
                MongoDBPython
              </a>
              ,{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={`${PageLanguage.mongoJS}`}
              >
                MongoDBJS
              </a>
              , Git.
            </h2>
          </div>
        </div>
        <div className='skill_box'>
          <img alt='current' src={Current} className='img-current' />
          <div>
            <h1 className='title'>{PageLanguage.title3}</h1>
            <h2 className='text_box'>
              {PageLanguage.message4}{' '}
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://killi.io/'
              >
                Killi
              </a>{' '}
              {PageLanguage.message5}
            </h2>
          </div>
        </div>

        <div className='skill_box'>
          <img alt='like' src={Like} className='img-like' />
          <div>
            <h1 className='title'>{PageLanguage.title4}</h1>
            <h2 className='text_box'>
              {PageLanguage.message6} <i>{PageLanguage.message7}</i>.{' '}
              {PageLanguage.message8}
            </h2>
          </div>
        </div>
        <div className='rocket'>
          <svg viewBox='0 0 800 600' preserveAspectRatio='xMinYMid slice'>
            <g id='stars'>
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
              <circle />
            </g>
            <g id='comets'>
              <line x1='1185' y1='-15' x2='77.5' y2='1092.5' />
              <line x1='854' y1='8' x2='163' y2='699' />
              <line x1='573' y1='-33' x2='-49.5' y2='589.5' />
              <line x1='271' y1='-33' x2='-60.5' y2='298.5' />
              <line x1='463' y1='-76' x2='-102' y2='489' />
              <line x1='120' y1='-19' x2='-26' y2='127' />
              <line x1='866' y1='174.3' x2='305.6' y2='734.7' />
              <line x1='854' y1='462' x2='653' y2='663' />
            </g>
            <g id='rocket'>
              <path d='M445.3,256.3c-47.3-3.5-62.8,27-62.8,27c-18.5,2-24,10-24,10l15.5,12.3c-0.5,15.3,3.5,16.5,3.5,16.5c5.5,7.5,17.8,4.8,17.8,4.8l12.8,17c12-12.5,10.3-25.5,10.3-25.5C450.8,300,445.3,256.3,445.3,256.3zM416.3,297c-6.5,0-11.8-5.3-11.8-11.8c0-6.5,5.3-11.8,11.8-11.8s11.8,5.3,11.8,11.8C428,291.7,422.7,297,416.3,297z' />
              <circle />
              <polygon points='371.3,338.6 355.7,344.7 363.1,329.7' />
            </g>
          </svg>
        </div>
        <div className='skill_box'>
          <img alt='job' src={Job} className='img-job' />
          <div>
            <h1 className='title'>{PageLanguage.title5}</h1>
            <h2 className='text_box'>
              {PageLanguage.message9} <br />
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={`${PageLanguage.link}`}
              >
                {PageLanguage.message10}
              </a>
            </h2>
          </div>
        </div>
        <div className='skill_box'>
          <img alt='letter' src={Letter} className='img-email' />
          <div>
            <h1 className='title'>{PageLanguage.title6}</h1>
            <h2 className='text_box'>
              {PageLanguage.message11} <br /> {PageLanguage.message12}.
            </h2>
          </div>
        </div>

        <div className='form_louco'>
          <form
            action='https://formspree.io/m.oliverunb@gmail.com'
            method='POST'
          >
            <div className='form_class'>
              <input
                type='text'
                name='name'
                placeholder={`${PageLanguage.placeholder1}`}
                className='input-text'
              />
            </div>
            <div className='form_class'>
              <input
                type='email'
                name='_replyto'
                placeholder={`${PageLanguage.placeholder2}`}
                className='input-text'
              />
            </div>
            <div className='form_class_message'>
              <input
                type='text'
                name='message'
                placeholder={`${PageLanguage.placeholder3}`}
                className='input-text'
              />
            </div>
            <div className='form_class padding8'>
              <button className='learn-more' type='submit'>
                <div className='circle'>
                  <span className='icon arrow' />
                </div>
                <p className='button-text'>{`${PageLanguage.placeholder4}`}</p>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='footer'>
        <div className='social-btns'>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn facebook'
            href='https://www.facebook.com/oliveigor'
          >
            <i className='fa fa-facebook' />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn twitter'
            href='https://twitter.com/oliverig0r'
          >
            <i className='fa fa-twitter' />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn google'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=m.oliverunb@gmail.com'
          >
            <i className='fa fa-google' />
          </a>
          <a
            rel='noopener noreferrer'
            target='_blank'
            className='btn github'
            href='https://github.com/oliverigor'
          >
            <i className='fa fa-github' />
          </a>
        </div>
        <small>
          <p>
            MADE BY ME...YES...
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://github.com/oliverigor'
            >
              IGOR
            </a>
          </p>
        </small>
      </div>
    </div>
  )
}

export default App
