import * as React from 'react';
import { useState, useCallback } from 'react';

import DarkModeContext from './DarkModeContext';

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = useCallback(
    () => setIsDarkMode(!isDarkMode),
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children(isDarkMode)}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
