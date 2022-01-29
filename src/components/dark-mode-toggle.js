import * as React from 'react';
import { useContext } from 'react';
import { css } from '@emotion/react';

import ColorModeContext from '../contexts/ColorModeContext';

const DarkModeToggle = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div
      css={css`
        cursor: pointer;
        user-select: none;
      `}
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
