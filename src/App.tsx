import React from 'react';
import Main from '@/src/screens/MainScreen';
import { useTheme } from './hooks/useTheme';
import { lightTheme } from './style/theme';
import SettingButton from './components/SettingButton';
import styled, { ThemeProvider } from 'styled-components';

export const ThemeDispatch: React.Context<CustomTheme> = React.createContext(lightTheme);

const RootChildDiv = styled.div`
  background: ${props => props.theme.colors.mainBgColor};
`

function App() {

  const [theme, toggleTheme] = useTheme()

  return (
    <ThemeDispatch.Provider value={theme as CustomTheme}>
      <ThemeProvider theme={theme}>
        <RootChildDiv>
          <Main />
          <SettingButton toggleTheme={toggleTheme as () => void} />
        </RootChildDiv>
      </ThemeProvider>
    </ThemeDispatch.Provider>
  );
}

export default App;
