import * as React from 'react';
import { css } from '@emotion/react';

import useDarkMode from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div
      css={css`
        cursor: pointer;
        user-select: none;
      `}
      onClick={toggleDarkMode}
    >
      <span
        css={css`
          line-height: 80px !important;
        `}
        className="material-icons"
      >
        {isDarkMode ? 'dark_mode' : 'light_mode'}
      </span>
    </div>
  );
};

export default DarkModeToggle;
