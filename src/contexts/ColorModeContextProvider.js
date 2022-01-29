import * as React from 'react';
import { useEffect, useState } from 'react';

import themes from '../themes';

import ColorModeContext from './ColorModeContext';

const ColorModeContextProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);
  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (value) => {
    const root = window.document.documentElement;

    rawSetColorMode(value);
    window.localStorage.setItem('color-mode', value);

    root.style.setProperty(
      '--color-text',
      value === 'light' ? themes.light.textColor : themes.dark.textColor
    );

    root.style.setProperty(
      '--color-text-secondary',
      value === 'light'
        ? themes.light.secondaryTextColor
        : themes.dark.secondaryTextColor
    );

    root.style.setProperty(
      '--color-background',
      value === 'light'
        ? themes.light.backgroundColor
        : themes.dark.backgroundColor
    );

    root.style.setProperty(
      '--color-primary',
      value === 'light' ? themes.light.primaryColor : themes.dark.primaryColor
    );

    root.style.setProperty(
      '--color-primary-variant',
      value === 'light'
        ? themes.light.primaryVariantColor
        : themes.dark.primaryVariantColor
    );

    root.style.setProperty(
      '--color-secondary',
      value === 'light'
        ? themes.light.secondaryColor
        : themes.dark.secondaryTextColor
    );
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
