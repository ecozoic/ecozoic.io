import { useContext } from 'react';

import DarkModeContext from '../contexts/DarkModeContext';

const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
