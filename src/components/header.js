import * as React from 'react';
import { css } from '@emotion/react';

const Header = () => (
  <header
    css={css`
      border-color: #ccc;
      color: #ffffff;
      display: flex;
      height: 80px;
      width: 100%;
      z-index: 50000;
      background: linear-gradient(45deg, #da0050, #8e2b88);
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

export default Header;
