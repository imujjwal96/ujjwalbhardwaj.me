import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.date}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
    {article.tags &&
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
  </div>
)
