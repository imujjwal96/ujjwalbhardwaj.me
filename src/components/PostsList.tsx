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
        key={-3}
        href={"/posts"}
        disabled={this.props.isFirst}
      />,
      <Pagination.Prev
        key={-4}
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
        key={-1}
        href={"/posts/page=" + (this.props.currentPage + 1)}
        disabled={this.props.isLast}
      />,
      <Pagination.Last
        key={-2}
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
                key={Math.floor(Math.random()*100)}
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
            © 2024 Ujjwal Bhardwaj. All Rights Reserved.
          </footer>
        </Col>
      </>
    );
  }
}

export default PostsList
