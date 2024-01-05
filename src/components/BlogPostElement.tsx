import * as React from 'react'

interface Post {
  title: string;
  author: string;
  slug: string;
  date: string;
  body: string;
}


class BlogPostElement extends React.Component<Post, {}> {
  render() {
    const route = '/post/' + this.props.slug;

    const renderTitleLink = () => {
      if (this.props.slug !== null) {
        return(
          <a href={route}>
            {this.props.title}
          </a>
        );
      }
      return(
        <span>{this.props.title}</span>
      );
    }

    const renderReadMoreButton = () => {
      if (this.props.slug !== null) {
        return (
          <div className="blog-footer">
            <a href={route}>Read more</a>
          </div>
        );
      }
    }

    return (
      <>
      <article className="blog-post">
        <div className="blog-title">
          <h1>
            {renderTitleLink()}
          </h1>
        </div>
        <div className="blog-post-meta" style={{fontWeight: "bold", textAlign: "center"}}>
          {this.props.date} by {this.props.author}
        </div>
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
        {renderReadMoreButton()}
      </article>
      <hr />
      </>
    );
  }
}

export default BlogPostElement
