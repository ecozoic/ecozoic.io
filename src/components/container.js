import * as React from 'react';
import { css } from '@emotion/react';

const Container = ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 1100px;
    `}
  >
    {children}
  </div>
);

export default Container;
