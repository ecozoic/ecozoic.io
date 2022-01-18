import React from 'react';
import { graphql } from 'gatsby';

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlogPost;

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: post.content?.childMarkdownRemark?.html,
        }}
      ></div>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
