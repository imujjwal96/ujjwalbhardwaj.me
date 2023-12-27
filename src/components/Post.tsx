import * as React from 'react'
import LeftSide from './LeftSide'
import { Col } from 'react-bootstrap'
import BlogPostElement from './BlogPostElement'
import { FacebookProvider, Comments } from 'react-facebook';

interface post {
  post:any
}

class Post extends React.Component<post, {}> {
  render() {
    const post = this.props.post;

    return (
      <>
        <LeftSide />
        <Col md={8} className="right-side" style={{textAlign: "justify"}}>
          <BlogPostElement
            title={post.title.title}
            author={post.author[0].name}
            slug={null}
            date={post.date}
            body={post.body.childMarkdownRemark.html}
          />
          <FacebookProvider appId="353865691635127">
            <Comments href={"http://ujjwalbhardwaj.me/post/" + post.slug} width={`100%`} />
          </FacebookProvider>
          <footer className="hidden-md-down">© 2024 Ujjwal Bhardwaj. All Rights Reserved. (Source&nbsp;<a href="https://github.com/imujjwal96/ujjwalbhardwaj.me" target="_blank">code</a>)</footer>
        </Col>
      </>
    );
  }
}

export default Post