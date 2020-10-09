import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title {
              title
          }
          slug
          date(formatString: "MMMM Do, YYYY")
          tags
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulAuthor(
      filter: { contentful_id: { eq: "321f721b-83ee-5466-8818-8f8c729db0f7" } }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`
