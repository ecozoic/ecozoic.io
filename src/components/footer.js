import * as React from 'react';
import { css } from '@emotion/react';

import Container from './container';

const Footer = () => (
  <footer
    css={css`
      border-top: 1px solid var(--color-tertiary);
      color: var(--color-footer-text);
      height: 80px;
      width: 100%;
      z-index: 50000;
      background-color: var(--color-primary);

      a {
        color: var(--color-footer-link-text);
        border-bottom: 1px solid var(--color-footer-link-text);

        :hover {
          color: var(--color-footer-link-text-hover);
          border-bottom-color: transparent;
        }
      }
    `}
  >
    <Container>
      <div
        css={css`
          padding: 16px 16px 0;
        `}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </Container>
  </footer>
);

export default Footer;
