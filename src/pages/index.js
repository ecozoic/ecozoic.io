import * as React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';

import ArticlePreview from '../components/article-preview';
import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Title from '../components/title';

const IndexPage = (props) => {
  const posts = props.data.allContentfulBlogPost.nodes;

  return (
    <Layout>
      <Seo title="all posts" />
      <Container>
        <Title
          css={css`
            margin-top: calc(16px + 0.6rem);
            margin-bottom: 24px;
          `}
        >
          Recent Posts
        </Title>
        <ArticlePreview posts={posts} />
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      nodes {
        author {
          name
          avatar {
            gatsbyImageData(
              layout: FIXED
              placeholder: NONE
              width: 40
              aspectRatio: 1
              cornerRadius: -1
            )
          }
        }
        title
        subtitle
        slug
        updatedAt
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`;
