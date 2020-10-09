import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons"

class Footer extends React.Component {
  render() {
    return (
      <a className="btn btn-primary back-to-top" id="back-to-top" href="#" role="button" data-toggle="tooltip"
         data-placement="left"><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
    );
  }
}

export default Footer