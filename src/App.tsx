import React from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#32323B'
    },
    secondary: {
      main: '#56E7A5'
    },
  }
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ResponsiveDrawer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
