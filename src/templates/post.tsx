import * as React from "react"
import { graphql } from 'gatsby'

import LayoutV2 from "../components/LayoutV2"
import Post from '../components/Post'
import { get } from 'lodash'

import "../assets/css/bootstrap.min.css"
import "../assets/css/main.css"
import SEO from '../components/SEO'


class PostPage extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost')
    post.href = this.props.location.href
    console.log("Bhard");
    console.log(post);
    console.log(post.title.title);
    console.log(post.body.childMarkdownRemark.excerpt);
    return (
      <LayoutV2>
        <SEO
          title={post.title.title}
          description={post.body.childMarkdownRemark.excerpt}
        />
        <Post post={post}/>
      </LayoutV2>
    );
  }
}


export default PostPage

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                description
                
            }
        }
        contentfulPost(slug: { eq: $slug }) {
            body {
                childMarkdownRemark {
                    html,
                    timeToRead
                    excerpt(pruneLength: 150)
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
`

