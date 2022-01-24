import React from "react"
import "../App.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-btns">
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn facebook"
          href="https://www.facebook.com/oliveigor"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn twitter"
          href="https://twitter.com/oliverig0r"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn google"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=m.oliverunb@gmail.com"
        >
          <i className="fa fa-google" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          className="btn github"
          href="https://github.com/oliverigor"
        >
          <i className="fa fa-github" />
        </a>
      </div>
      {/* <small>
        <p>
          MADE BY ME...YES...
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliverigor"
          >
            IGOR
          </a>
        </p>
      </small> */}
    </div>
  )
}

export default Footer
