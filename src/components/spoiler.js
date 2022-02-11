import * as React from 'react';
import { css } from '@emotion/react';

import { COLORS } from '../constants/colors';

const Spoiler = ({ children }) => (
  <span
    css={css`
      background-color: ${COLORS.background.dark};
      color: ${COLORS.background.dark};
      border: 1px solid ${COLORS.text.dark};

      :hover {
        color: ${COLORS.text.dark};
      }
    `}
  >
    {children}
  </span>
);

export default Spoiler;
