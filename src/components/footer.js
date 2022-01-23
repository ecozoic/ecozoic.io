import * as React from 'react';
import { css } from '@emotion/react';

import Container from './container';

const Footer = () => (
  <footer
    css={css`
      color: #ffffff;
      height: 80px;
      width: 100%;
      z-index: 50000;
      background-color: #32283c;
    `}
  >
    <Container>
      <div
        css={css`
          padding: 16px 16px 0;
        `}
      >
        ecozoic.io
      </div>
    </Container>
  </footer>
);

export default Footer;
