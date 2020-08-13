import React, { useState } from 'react';
import { lightTheme, darkTheme } from '@/src/style/theme';
import { ThemeMode } from '../types';

export const useTheme = () => {

  const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initThemeMode: ThemeMode = isBrowserDarkMode ? 'dark' : 'light';

  const localSettingTheme = localStorage.getItem('themeMode');

  if (localSettingTheme) {
    initThemeMode = localSettingTheme as ThemeMode;
  }

  const [theme, setTheme] = useState(getTheme(initThemeMode));

  const setMode = (mode: ThemeMode) => {
    window.localStorage.setItem('themeMode', mode);
    setTheme(getTheme(mode));
  }

  const toggleTheme = () => setMode(theme === lightTheme ? 'dark' : 'light');

  return [theme, toggleTheme]
}

const getTheme = (mode: ThemeMode) => {
  switch (mode) {
    case 'dark': return darkTheme;
    case 'light': return lightTheme
  }
}
