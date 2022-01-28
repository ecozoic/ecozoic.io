import * as React from 'react';
import { useState, useCallback } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

import DarkModeContext from './DarkModeContext';

const DarkModeContextProvider = ({ children }) => {
  const [darkModeSetting, setDarkModeSetting] = useLocalStorage(
    'dark-mode',
    true
  );
  const [isDarkMode, setIsDarkMode] = useState(darkModeSetting);
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    setDarkModeSetting(!isDarkMode);
  }, [isDarkMode, setDarkModeSetting]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children(isDarkMode)}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
