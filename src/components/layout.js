import * as React from 'react';
import { css } from '@emotion/react';

import ColorModeContextProvider from '../contexts/ColorModeContextProvider';

import Footer from './footer';
import GlobalStyles from './global-styles';
import Header from './header';

const Layout = ({ children }) => (
  <ColorModeContextProvider>
    <div
      id="root"
      css={css`
        background-color: var(--color-background);
        transition: 1s background-color ease;
      `}
    >
      <GlobalStyles />
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
  </ColorModeContextProvider>
);

export default Layout;
