const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/post.tsx')
    const postsList = path.resolve('./src/templates/posts.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  title {
                    title
                  }
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allContentfulPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/post/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })

        const postsPerPage = 10;
        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/posts` : `/posts/page=${i + 1}`,
            component: postsList,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          });
        });

      })
    )
  })
}
