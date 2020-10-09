import * as React from 'react'

interface Post {
  title: string;
  author: string;
  slug: string;
  date: string;
  body: string;
}

class BlogPost extends React.Component<Post, {}> {
  render() {
    const route = '/post/' + this.props.slug;
    return (
      <>
        <article className="blog-post">
          <div className="blog-title">
            <h2>
              <a href={route}>
                {this.props.title}
              </a>
            </h2>
          </div>
          <div className="blog-post-meta" style={{fontWeight: "bold", textAlign: "center"}}>
            {this.props.date} by {this.props.author}
          </div>
          <div className="blog-body" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
        </article>
        <hr />
      </>
    );
  }
}

export default BlogPost