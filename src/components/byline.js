import * as React from 'react';
import { css } from '@emotion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Byline = ({ author, avatar, timestamp }) => (
  <div
    css={css`
      color: #727275;
      font-size: 0.8em;
    `}
  >
    By{' '}
    <span>
      <GatsbyImage
        image={avatar}
        css={css`
          display: inline-block;
        `}
      />
    </span>
    <span>{author}</span> | <span>{timestamp}</span>
  </div>
);

export default Byline;
