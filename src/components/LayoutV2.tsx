import * as React from 'react'
import HeaderV2 from './HeaderV2'
import Footer from './Footer'
import Container from "react-bootstrap/esm/Container"

class LayoutV2 extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <HeaderV2 />
        <Container fluid={"md"} className="container-fluid">
          {children}
        </Container>
        <Footer />
      </>
    );
  }
}

export default LayoutV2