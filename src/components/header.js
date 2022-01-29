import * as React from 'react';
import { css } from '@emotion/react';

import DarkModeToggle from './dark-mode-toggle';

const Header = () => (
  <header
    css={css`
      border-bottom: 1px solid var(--color-secondary);
      color: var(--color-text);
      display: flex;
      height: 80px;
      width: 100%;
      z-index: 50000;
      background: linear-gradient(
        45deg,
        var(--color-primary),
        var(--color-primary-variant)
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

export default Header;
