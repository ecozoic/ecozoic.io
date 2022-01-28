import * as React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Byline from '../components/byline';
import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Subtitle from '../components/subtitle';
import Title from '../components/title';

const BlogPostTemplate = (props) => {
  const post = props.data.contentfulBlogPost;

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.subtitle}
        image={post.image.social.images.fallback.src}
      />
      <Container>
        <article
          css={css`
            margin-bottom: 4rem;
            padding: 16px 16px 0;
          `}
        >
          <div
            css={css`
              margin-bottom: 1.2rem;
            `}
          >
            <Title>{post.title}</Title>
            <Subtitle>{post.subtitle}</Subtitle>
            <Byline
              author={post.author.name}
              avatar={post.author.avatar.gatsbyImageData}
              timestamp={post.updatedAt}
            />
          </div>
          <GatsbyImage
            css={css`
              margin-bottom: 32px;
            `}
            image={post.image.gatsbyImageData}
          />
          <div
            css={css`
              font-weight: 400;
            `}
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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1100)
        social: gatsbyImageData(
          layout: FIXED
          width: 1200
          height: 630
          placeholder: NONE
          resizingBehavior: FILL
        )
      }
    }
  }
`;
