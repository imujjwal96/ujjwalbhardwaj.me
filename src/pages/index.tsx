import * as React from "react"

import LayoutV2 from "../components/LayoutV2"
import Homepage from "../components/Homepage"
import SEO from "../components/SEO"
import { get } from 'lodash'
import { graphql } from 'gatsby'


class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <LayoutV2>
        <SEO />
        <Homepage />
      </LayoutV2>
    );
  }
}


export default HomePage

export const pageQuery = graphql`
    query HomeQuery {
        site {
            siteMetadata {
                title
                description
                social {
                    twitter
                }
            }
        }
    }
`
