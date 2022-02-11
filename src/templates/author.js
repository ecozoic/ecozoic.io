import * as React from 'react';
import { graphql } from 'gatsby';

import ArticlePreview from '../components/article-preview';
import Container from '../components/container';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Title from '../components/title';

const AuthorTemplate = (props) => {
  const author = props.data.contentfulAuthor;
  const posts = props.data.allContentfulBlogPost.nodes;

  return (
    <Layout>
      <Seo
        title={author.name}
        description={`All posts by ${author.name}`}
        image={author.avatar.social.images.fallback.src}
      />
      <Container>
        <Title>{`All posts by ${author.name}`}</Title>
        <ArticlePreview posts={posts} />
      </Container>
    </Layout>
  );
};

export default AuthorTemplate;

export const pageQuery = graphql`
  query AuthorDetailsByName($name: String!) {
    contentfulAuthor(name: { eq: $name }) {
      name
      avatar {
        social: gatsbyImageData(
          layout: FIXED
          width: 1200
          height: 630
          placeholder: NONE
          resizingBehavior: FILL
          formats: [PNG]
        )
      }
    }
    allContentfulBlogPost(
      filter: { author: { name: { eq: $name } } }
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
