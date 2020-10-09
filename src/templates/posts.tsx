import * as React from 'react'
import { graphql } from 'gatsby'

import LayoutV2 from "../components/LayoutV2"
import PostsList from "../components/PostsList"

import "../assets/css/bootstrap.min.css"
import "../assets/css/main.css"
import { get } from 'lodash'
import SEO from '../components/SEO'

class Posts extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const { currentPage, numPages } = this.props.pageContext

    return (
      <LayoutV2>
        <SEO />
        <PostsList
          posts={posts}
          currentPage = {currentPage}
          numPages = {numPages}
          isFirst = {currentPage === 1}
          isLast = {currentPage === numPages}
        />
      </LayoutV2>
    );
  }
}

export default Posts

export const pageQuery = graphql`
    query PostsQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
                description
            }
        }
        allContentfulPost(
            sort: {fields: date, order: DESC}, 
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                    childContentfulPostBodyTextNode {
                        childMarkdownRemark {
                            html,
                            timeToRead,
                            excerpt(pruneLength: 250)
                        }
                    }
                    title {
                        title
                    }
                    author {
                        name
                    }
                    date(formatString: "dddd, MMMM DD, YYYY")
                    slug
                }
            }
        }
    }
`
