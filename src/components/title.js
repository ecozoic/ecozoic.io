import * as React from 'react';
import { css } from '@emotion/react';

const Title = ({ children }) => (
  <h1
    css={css`
      color: var(--color-text);
      font-size: 3em;
      font-weight: 700;
      line-height: 1.15;
      padding-top: 0.6rem;
      margin-bottom: 0.6rem;
    `}
  >
    {children}
  </h1>
);

export default Title;
