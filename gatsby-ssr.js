import * as React from 'react';

import themes from './src/themes';

const MagicScriptTag = () => {
  let codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
    
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
    
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    
      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
    
      return 'dark';
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${themes.light.textColor}'
        : '${themes.dark.textColor}'
    );

    root.style.setProperty(
      '--color-text-secondary',
      colorMode === 'light'
        ? '${themes.light.secondaryTextColor}'
        : '${themes.dark.secondaryTextColor}'
    );

    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${themes.light.backgroundColor}'
        : '${themes.dark.backgroundColor}'
    );

    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${themes.light.primaryColor}'
        : '${themes.dark.primaryColor}'
    );

    root.style.setProperty(
      '--color-primary-variant',
      colorMode === 'light'
        ? '${themes.light.primaryVariantColor}'
        : '${themes.dark.primaryVariantColor}'
    );

    root.style.setProperty(
      '--color-secondary',
      colorMode === 'light'
        ? '${themes.light.secondaryColor}'
        : '${themes.dark.secondaryTextColor}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
  })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag key="theme" />);
};
