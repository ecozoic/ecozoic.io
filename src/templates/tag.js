import * as React from 'react';
import { graphql } from 'gatsby';

import ArticlePreview from '../components/article-preview';
import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Title from '../components/title';

const TagTemplate = (props) => {
  const tag = props.pageContext.tag;
  const posts = props.data.allContentfulBlogPost.nodes;

  return (
    <Layout>
      <Seo title={tag} description={`All posts tagged ${tag}`} />
      <Container>
        <Title>{`All posts tagged ${tag}`}</Title>
        <ArticlePreview posts={posts} />
      </Container>
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query PostsWithTag($tag: String!) {
    allContentfulBlogPost(
      filter: { tags: { in: [$tag] } }
      sort: { fields: [createdAt], order: DESC }
    ) {
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
