import * as React from 'react';
import { css } from '@emotion/react';

const Title = ({ children }) => (
  <h1
    css={css`
      font-size: 3em;
      padding-top: 0.6rem;
      margin-bottom: 0.6rem;
    `}
  >
    {children}
  </h1>
);

export default Title;
