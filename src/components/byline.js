import * as React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const Byline = ({ author, avatar, timestamp }) => (
  <div
    css={css`
      align-items: center;
      color: var(--color-text-secondary);
      display: flex;
      font-size: 0.8em;
      font-weight: 400;
    `}
  >
    <span>
      <GatsbyImage
        image={avatar}
        css={css`
          display: inline-block;
          margin-right: 0.8em;
        `}
      />
    </span>
    <span>
      <Link
        css={css`
          color: var(--color-link-text);

          :hover {
            color: var(--color-link-text-hover);
          }
        `}
        to={`/authors/${author.toLowerCase()}`}
      >
        {author}
      </Link>
    </span>
    <span
      css={css`
        :before {
          border-left: 1px solid;
          content: '';
          display: inline-block;
          height: 1.1em;
          margin: 0 0.8em;
          vertical-align: middle;
          width: 2px;
        }
      `}
    >
      {new Date(timestamp).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      })}
    </span>
  </div>
);

export default Byline;
