import * as React from 'react';
import { css, useTheme } from '@emotion/react';

const Subtitle = ({ children }) => {
  const theme = useTheme();

  return (
    <p
      css={css`
        color: ${theme.secondaryTextColor};
        font-size: 1.45em;
        font-style: italic;
        font-weight: 400;
        line-height: 1.24;
        margin-bottom: 0.6rem;
      `}
    >
      {children}
    </p>
  );
};

export default Subtitle;
