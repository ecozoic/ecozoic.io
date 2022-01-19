import * as React from 'react';
import { Global, css } from '@emotion/react';

import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
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
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
