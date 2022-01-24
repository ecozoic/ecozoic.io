import * as React from 'react';
import { css, Global, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
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
          color: ${theme.textColor};
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
  );
};

export default GlobalStyles;