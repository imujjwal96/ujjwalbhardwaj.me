import * as React from 'react'
import { Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faInstagram, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons"

class LeftSide extends React.Component {
  render() {
    return (
      <Col md={4} className="left-side hidden-sm-down">
        <div className="div">
          <a href={'/'}>
            <img id="logo" src={require('../assets/images/logo2.png')} title="Ujjwal Bhardwaj" />
          </a>
          <p id="tagline">Software Engineer | Technical Evangelist</p>
          <p>
            <a className="links" href="/posts" target="_blank">Blog Posts</a>
            <a className="links" href="https://drive.google.com/open?id=17rtrOPVi6GbLsBE2KiO7woL2s5nHSx1D" target="_blank">Resume</a>
          </p>
          <p className="socials">
            <a href="mailto:ujjwalb1996@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://www.facebook.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://in.linkedin.com/in/ujjwal-bhardwaj-b6b46a80" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/ujjwalbhardwaj96" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://github.com/imujjwal96" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://stackoverflow.com/users/4592183/ujjwal-bhardwaj" target="_blank"><FontAwesomeIcon icon={faStackOverflow} /></a>
          </p>
          <p className="certificates">
            <img className="logoAWS" src={require("../assets/images/aws_logo_white.png")} />
            <img className="logoAWS" src={require("../assets/images/aws_saa_white.png")} />
            <img className="logoAWS" src={require("../assets/images/aws_soa_white.png")} />
            <img className="logoAWS" src={require("../assets/images/aws_da_white.png")} style={{ width: "55.032%" }}/>
          </p>

        </div>
      </Col>
    );
  }
}

export default LeftSide