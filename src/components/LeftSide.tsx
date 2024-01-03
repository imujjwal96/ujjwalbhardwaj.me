import * as React from 'react'
import { Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faGithub, faInstagram, faLinkedinIn, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

class LeftSide extends React.Component {
  render() {
    return (
      <Col md={4} className="left-side hidden-sm-down">
        <div className="div">
          <a href={'/'}>
            <img id="logo" src={require('../assets/images/logo2.png').default} title="Ujjwal Bhardwaj" />
          </a>
          <p id="tagline">Software Development Engineer</p>
          <p>
            <a className="links" href="/posts" target="_blank">Blog Posts</a>
            <a className="links" href="https://drive.google.com/file/d/1EAuo5AGSjV5MyMx-taCOp8KOyjkSDSOf/view?usp=sharing" target="_blank">Resume</a>
          </p>
          <p className="socials">
            <a href="mailto:ujjwalb1996@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://twitter.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://in.linkedin.com/in/ujjwal-bhardwaj-b6b46a80" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://stackoverflow.com/users/4592183/ujjwal-bhardwaj" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /></a>
          </p>
          <p className="certificates">
            <img className="logoAWS" src={require("../assets/images/aws_logo_white.png").default} />
            <img className="logoAWS" src={require("../assets/images/aws_saa_white.png").default} />
            <img className="logoAWS" src={require("../assets/images/aws_soa_white.png").default} />
            <img className="logoAWS" src={require("../assets/images/aws_da_white.png").default} style={{ width: "55.032%" }}/>
          </p>

        </div>
      </Col>
    );
  }
}

export default LeftSide
