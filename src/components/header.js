import * as React from 'react';
import { css, useTheme } from '@emotion/react';

const Header = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        border-bottom: 1px solid ${theme.dark.secondaryColor};
        color: ${theme.dark.textColor};
        display: flex;
        height: 80px;
        width: 100%;
        z-index: 50000;
        background: linear-gradient(
          45deg,
          ${theme.dark.primaryColor},
          ${theme.dark.primaryVariantColor}
        );
      `}
    >
      <div
        css={css`
          line-height: 80px;
          margin-left: 16px;
        `}
      >
        ecozoic.io
      </div>
      <nav
        css={css`
          padding-left: 32px;
        `}
      >
        <ul
          css={css`
            display: flex;
            list-style-type: none;

            li {
              line-height: 80px;
              padding: 0 12px;
            }
          `}
        >
          <li>watch</li>
          <li>play</li>
          <li>code</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
