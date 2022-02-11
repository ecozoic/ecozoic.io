import * as React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const Tags = ({ tags }) => (
  <ul
    css={css`
      display: flex;
      list-style-type: none;
    `}
  >
    {tags.map((tag) => (
      <Link
        css={css`
          border-bottom: none;
        `}
        to={`/tags/${tag.toLowerCase()}`}
      >
        <li
          css={css`
            border: 1px solid var(--color-link-text);
            border-radius: 5px;
            color: var(--color-link-text);
            padding: 0 0.5em;
            margin-right: 1em;

            :hover {
              color: var(--color-link-text-hover);
              border-color: var(--color-link-text-hover);
            }
          `}
          key={tag}
        >
          {tag.toLowerCase()}
        </li>
      </Link>
    ))}
  </ul>
);

export default Tags;
