import * as React from 'react';

const DarkModeContext = React.createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
});

export default DarkModeContext;
