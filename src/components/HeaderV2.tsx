import * as React from 'react'

class HeaderV2 extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-dark  hidden-md-up">
        <a href="/"><img id="title" src={require("../assets/images/logo.png").default} title="Ujjwal Bhardwaj" /></a>
    <ul className="navbar-nav">
      <li className="nav-item"><a className="nav-link" href="/posts"><strong>BLOG</strong></a></li>
    </ul>
 </nav>
    );
  }
}

export default HeaderV2