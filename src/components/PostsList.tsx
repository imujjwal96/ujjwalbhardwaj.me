import * as React from 'react'
import LeftSide from "./LeftSide"
import { Col, Pagination } from "react-bootstrap"
import BlogPostElement from "./BlogPostElement"


interface posts {
  posts: any,
  currentPage: number,
  numPages: number
  isFirst: boolean,
  isLast: boolean
}

class PostsList extends React.Component<posts, {}> {
  render() {
    let active = this.props.currentPage;
    let items = [];
    items.push(
      <Pagination.First
        href={"/posts"}
        disabled={this.props.isFirst}
      />,
      <Pagination.Prev
        href={this.props.currentPage === 2 ? "/posts" : "/posts/page=" + (this.props.currentPage - 1)}
        disabled={this.props.isFirst}
      />
    );
    for (let number = 1; number <= this.props.numPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          href={number === 1 ? "/posts" : "/posts/page=" + number}
        >
          {number}
        </Pagination.Item>,
      );
    }
    items.push(
      <Pagination.Next
        href={"/posts/page=" + (this.props.currentPage + 1)}
        disabled={this.props.isLast}
      />,
      <Pagination.Last
        href={"/posts/page=" + this.props.numPages}
        disabled={this.props.currentPage === this.props.numPages}
      />
    );

    return (
      <>
        <LeftSide />
        <Col md={8} className="right-side" style={{textAlign: "justify"}}>
          {this.props.posts.map(({ node }) => {
            return (
              <BlogPostElement
                title = {node.title.title}
                author = {node.author[0].name}
                date = {node.date}
                slug = {node.slug}
                body = {node.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt}
              />
            )
          })}

          <div style={{textAlign: "center"}}><Pagination>{items}</Pagination></div>
          <footer className="hidden-md-down">
            © Ujjwal Bhardwaj. All Rights Reserved.
            (Source&nbsp;<a href="https://github.com/imujjwal96/personal-blog" target="_blank">code</a>)
          </footer>
        </Col>
      </>
    );
  }
}

export default PostsList
