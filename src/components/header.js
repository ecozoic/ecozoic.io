import * as React from 'react';
import { css, useTheme } from '@emotion/react';

import DarkModeToggle from './dark-mode-toggle';

const Header = () => {
  const theme = useTheme();

  return (
    <header
      css={css`
        border-bottom: 1px solid ${theme.secondaryColor};
        color: ${theme.textColor};
        display: flex;
        height: 80px;
        width: 100%;
        z-index: 50000;
        background: linear-gradient(
          45deg,
          ${theme.primaryColor},
          ${theme.primaryVariantColor}
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
      <div
        css={css`
          flex-grow: 1;
        `}
      ></div>
      <div
        css={css`
          margin-right: 16px;
        `}
      >
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
