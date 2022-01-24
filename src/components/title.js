import * as React from 'react';
import { css, useTheme } from '@emotion/react';

const Title = ({ children }) => {
  const theme = useTheme();

  return (
    <h1
      css={css`
        color: ${theme.textColor};
        font-size: 3em;
        font-weight: 700;
        line-height: 1.15;
        padding-top: 0.6rem;
        margin-bottom: 0.6rem;
      `}
    >
      {children}
    </h1>
  );
};

export default Title;
