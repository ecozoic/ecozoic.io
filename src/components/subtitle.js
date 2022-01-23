import * as React from 'react';
import { css } from '@emotion/react';

const Subtitle = ({ children }) => (
  <p
    css={css`
      color: #727275;
      font-size: 1.45em;
      font-style: italic;
      font-weight: 400;
      line-height: 1.24;
      margin-bottom: 0.6rem;
    `}
  >
    {children}
  </p>
);

export default Subtitle;
