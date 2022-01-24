import * as React from 'react';
import { css, ThemeProvider } from '@emotion/react';

import themes from '../themes';

import DarkModeContextProvider from '../contexts/DarkModeContextProvider';

import Footer from './footer';
import GlobalStyles from './global-styles';
import Header from './header';

const Layout = ({ children }) => (
  <DarkModeContextProvider>
    {(isDarkMode) => (
      <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
        <div
          id="root"
          css={css`
            background-color: ${isDarkMode
              ? themes.dark.backgroundColor
              : themes.light.backgroundColor};
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
      </ThemeProvider>
    )}
  </DarkModeContextProvider>
);

export default Layout;
