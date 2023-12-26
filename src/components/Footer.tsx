import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faInstagram, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
      <>
      <footer className="bg-inverse hidden-md-up navbar-dark" style={{ padding: "20px" }}>
      <div className="container text-center">
        <div className="row">
          <img src={require("../assets/images/aws_batches.png").default} title="Ujjwal Bhardwaj" style={{ width: "70%" }} />
          <hr />
        </div>
        <div className="row">
          <p className="socials">
            <a href="mailto:ujjwalb1996@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://twitter.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://in.linkedin.com/in/ujjwal-bhardwaj-b6b46a80" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.instagram.com/ujjwalbhardwaj96" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://stackoverflow.com/users/4592183/ujjwal-bhardwaj" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /></a>
          </p>
          <hr />
          <div className="footer-copyright" style={{ color: "white" }}>© 2024 Ujjwal Bhardwaj. All Rights Reserved.
            (Source&nbsp;<a href="https://github.com/imujjwal96/ujjwalbhardwaj.me" target="_blank">code</a>)
          </div>
        </div>
      </div>
    </footer>
        </>
    );
  }
}

export default Footer