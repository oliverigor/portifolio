import type { MetaFunction } from "@remix-run/node"

import { Myself, google, github, linkedin, twitter } from "../assets"

export const meta: MetaFunction = () => {
  return [
    { title: "Igor Martins" },
    { name: "description", content: "Welcome" },
  ]
}

export default function Index() {
  return (
    <div className="center flex flex-col text-center justify-center  h-dvh space-y-10">
      <div className="space-y-10 content-center">
        <img
          alt="selfie"
          className="rounded-full mx-auto"
          src={Myself}
          width={200}
        />
        <h1 className="font-mono text-3xl">Igor Martins</h1>
      </div>
      <div className="footer ">
        <div className="social-btns">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn twitter"
            href="https://twitter.com/oliverig0r"
            aria-label="twitter"
          >
            <img
              className="fa fa-twitter"
              src={twitter}
              alt="twitter"
              width={35}
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn google"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=m.oliverunb@gmail.com"
            aria-label="email"
          >
            <img
              className="fa fa-google"
              src={google}
              alt="google"
              width={35}
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn github "
            href="https://github.com/oliverigor"
            aria-label="github"
          >
            <img
              className="fa fa-github "
              src={github}
              alt="github"
              width={35}
            />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn linkedin"
            href="https://www.linkedin.com/in/igor-de-oliveira-martins-624b4895/"
            aria-label="linkedin"
          >
            <img
              className="fa fa-linkedin"
              src={linkedin}
              alt="linkedin"
              width={35}
            />
          </a>
        </div>
      </div>
    </div>
  )
}
