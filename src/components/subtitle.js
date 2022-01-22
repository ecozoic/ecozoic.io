import * as React from 'react';
import { css } from '@emotion/react';

const Subtitle = ({ children }) => (
  <p
    css={css`
      color: #727275;
      font-size: 1.45em;
      font-style: italic;
    `}
  >
    {children}
  </p>
);

export default Subtitle;
