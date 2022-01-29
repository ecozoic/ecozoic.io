import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/react';

import ThemeContext from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div
      css={css`
        cursor: pointer;
        user-select: none;
      `}
      role="button"
      onClick={() => {
        setColorMode(colorMode === 'dark' ? 'light' : 'dark');
      }}
    >
      <span
        css={css`
          line-height: 80px !important;
        `}
        className="material-icons"
      >
        {colorMode === 'dark' ? 'dark_mode' : 'light_mode'}
      </span>
    </div>
  );
};

export default DarkModeToggle;
