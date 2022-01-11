import React from "react"

import { Projects } from "../images"

const RecentProjects = ({ pageLanguage }) => {
  return (
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
          - {pageLanguage.message14} NodeJs, MongoDB, Docker{" "}
          {pageLanguage.message13} Nodemailer.
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliverigor/BarberPoint"
          >
            BarberPoint
          </a>{" "}
          - {pageLanguage.message14} NodeJs, Sequelize, Docker{" "}
          {pageLanguage.message13} Nunjucks.
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliverigor/FullStackJsAppUpload-frontend"
          >
            UploadApp
          </a>{" "}
          - {pageLanguage.message14} ReactJs, React-Native{" "}
          {pageLanguage.message13} NodeJs.
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliverigor/twitter-like"
          >
            Twitter-like
          </a>{" "}
          - {pageLanguage.message14} ReactJs, React-Native{" "}
          {pageLanguage.message13} NodeJs.
          <br />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/oliverigor/OliverGitHubFavorites-React-Redux"
          >
            GitFavorites
          </a>{" "}
          - {pageLanguage.message14} ReactJs, Redux {pageLanguage.message13}{" "}
          Redux-Saga.
        </h2>
      </div>
    </div>
  )
}

export default RecentProjects
