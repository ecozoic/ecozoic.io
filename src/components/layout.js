import * as React from 'react';
import { Global, css, ThemeProvider } from '@emotion/react';

import theme from '../theme';

import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div
      id="root"
      css={css`
        background-color: ${theme.dark.backgroundColor};
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
            color: ${theme.dark.textColor};
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
  </ThemeProvider>
);

export default Layout;
