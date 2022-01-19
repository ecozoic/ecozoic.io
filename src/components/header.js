import * as React from 'react';
import { css } from '@emotion/react';

const Header = () => (
  <header
    css={css`
      color: #ffffff;
      height: 80px;
      width: 100%;
      z-index: 50000;
      background: linear-gradient(45deg, #da0050, #8e2b88);
    `}
  >
    ecozoic.io
  </header>
);

export default Header;
