import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Byline from '../components/byline';
import Container from '../components/container';
import Layout from '../components/layout';
import Subtitle from '../components/subtitle';
import Title from '../components/title';

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlogPost;

  return (
    <Layout>
      <Container>
        <article>
          <Title>{post.title}</Title>
          <Subtitle>{post.subtitle}</Subtitle>
          <GatsbyImage image={post.image.gatsbyImageData} />
          <Byline
            author={post.author.name}
            avatar={post.author.avatar.gatsbyImageData}
            timestamp={post.updatedAt}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: post.content?.childMarkdownRemark?.html,
            }}
          ></div>
        </article>
      </Container>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      updatedAt
      author {
        name
        avatar {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 40
            aspectRatio: 1
            cornerRadius: -1
          )
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 640)
      }
    }
  }
`;
