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
          font-size: 19px;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
          text-decoration: inherit;
        }
        body {
          font-family: 'Inter';
          line-height: 1.6;
        }
        p {
          margin-bottom: 1.2rem;
        }
        a {
          border-bottom: 1px solid #da0050;
          color: #da0050;
          transition: color 0.1s;
          :hover {
            border-bottom-color: transparent;
            color: #a7003d;
          }
        }
        .gatsby-highlight {
          margin-bottom: 1.2rem;
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
