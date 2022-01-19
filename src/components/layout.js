import * as React from 'react';
import { Global, css } from '@emotion/react';

import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <div
    id="root"
    css={css`
      background-color: #f8f8f6;
    `}
  >
    <Global
      styles={css`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Header />
    <main
      css={css`
        min-height: calc(100vh - 160px);
      `}
    >
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
