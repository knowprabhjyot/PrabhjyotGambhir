import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      A600: blueGrey[600]
    },
    secondary: {
      main: amber[700],
    },
  },
  typography: {
    h5: {
      color: 'white'
    },
    h6: {
      color: 'white'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
