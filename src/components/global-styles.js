import * as React from 'react';
import { css, Global } from '@emotion/react';

import { COLORS } from '../constants/colors';

const GlobalStyles = () => (
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
        color: var(--color-text);
      }
      a {
        transition: color 0.1s;
      }
      .gatsby-highlight {
        margin-bottom: 1.2rem;
      }
      article div,
      article li {
        color: var(--color-text);
      }
      article a {
        border-bottom: 1px solid var(--color-link-text);
        color: var(--color-link-text);
        :hover {
          border-bottom-color: transparent;
          color: var(--color-link-text-hover);
        }
      }
      .gatsby-resp-image-figcaption {
        font-size: 0.9em;
        color: var(--color-text-secondary);
      }
      .spoiler {
        background-color: ${COLORS.background.dark};
        color: ${COLORS.background.dark};
        border: 1px solid ${COLORS.text.dark};
      }
      .spoiler:hover {
        color: ${COLORS.text.dark};
      }
    `}
  />
);

export default GlobalStyles;
