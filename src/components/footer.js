import * as React from 'react';
import { css, useTheme } from '@emotion/react';

import Container from './container';

const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      css={css`
        border-top: 1px solid ${theme.dark.secondaryColor};
        color: ${theme.dark.textColor};
        height: 80px;
        width: 100%;
        z-index: 50000;
        background-color: ${theme.dark.primaryColor};
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
};

export default Footer;
