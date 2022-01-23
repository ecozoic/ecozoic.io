import * as React from 'react';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Byline = ({ author, avatar, timestamp }) => (
  <div
    css={css`
      align-items: center;
      color: #727275;
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
          margin-right: 0.4em;
        `}
      />
    </span>
    <span>{author}</span>
    <span
      css={css`
        :before {
          border-left: 1px solid;
          content: '';
          display: inline-block;
          height: 1.1em;
          margin: 0 0.4em;
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
