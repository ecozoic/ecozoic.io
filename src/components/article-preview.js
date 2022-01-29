import * as React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Byline from './byline';

const ArticlePreview = ({ posts }) => {
  if (!posts || !Array.isArray(posts)) return null;

  return (
    <ul
      css={css`
        list-style-type: none;
        margin-bottom: 4rem;
        padding: 0 16px;
      `}
    >
      {posts.map((post) => (
        <li
          key={post.slug}
          css={css`
            border: 1px solid var(--color-primary-variant);
            margin-bottom: 4rem;
          `}
        >
          <Link to={post.slug}>
            <GatsbyImage image={post.image.gatsbyImageData} />
            <h2
              css={css`
                padding: 12px;
              `}
            >
              {post.title}
            </h2>
          </Link>
          <div
            css={css`
              color: var(--color-text);
              padding: 0 12px;
            `}
          >
            {post.subtitle}
          </div>
          <div
            css={css`
              padding: 12px;
            `}
          >
            <Byline
              author={post.author.name}
              avatar={post.author.avatar.gatsbyImageData}
              timestamp={post.updatedAt}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticlePreview;
