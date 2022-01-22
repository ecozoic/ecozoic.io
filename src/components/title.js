import * as React from 'react';
import { css } from '@emotion/react';

const Title = ({ children }) => (
  <h1
    css={css`
      font-size: 3em;
    `}
  >
    {children}
  </h1>
);

export default Title;
