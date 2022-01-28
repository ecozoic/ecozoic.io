import * as React from 'react';
import { css, useTheme } from '@emotion/react';

import Container from './container';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        border-top: 1px solid ${theme.secondaryColor};
        color: ${theme.textColor};
        height: 80px;
        width: 100%;
        z-index: 50000;
        background-color: ${theme.primaryColor};
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
};

export default Footer;
