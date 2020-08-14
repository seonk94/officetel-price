import React from 'react';
import Main from '@/src/screens/MainScreen';
import { useTheme } from './hooks/useTheme';
import { lightTheme } from './style/theme';
import { CustomTheme } from './types';

export const ThemeDispatch: React.Context<CustomTheme> = React.createContext(lightTheme);

function App() {

  const [theme] = useTheme()

  return (
    <ThemeDispatch.Provider value={theme as CustomTheme}>
      <div>
        <Main />
      </div>
    </ThemeDispatch.Provider>
  );
}

export default App;
