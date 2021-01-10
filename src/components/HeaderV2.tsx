import * as React from 'react'
import { Button, Form, FormControl, Nav, Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

class HeaderV2 extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark  hidden-md-up">
   <img  id="title" src={require("../assets/images/logo.png")} title="Ujjwal Bhardwaj" />
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link" href="/posts"><strong>BLOG</strong></a></li>
    </ul>
 </nav>
    );
  }
}


export default HeaderV2