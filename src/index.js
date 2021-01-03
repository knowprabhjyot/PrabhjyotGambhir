import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20202a',
      A600: '#2c2c36',
      A700: '#8c8c8e',
    },
    secondary: {
      main: '#f7bb08',
    },
  },
  typography: {
    allVariants: {
      color: '#fff',
      fontFamily: 'Rubik'
    },
    body2: {
      color: '#8c8c8e'
    },
    subtitle2: {
      color: '#fff'
    }
  },
  overrides: {
    MuiButton: {
      outlinedSecondary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: '#f7bb08' 
      },
      borderRadius: 'unset'
      },
      containedPrimary: {
        // color: '#fff',
        fontFamily: [
          'Rubik'
        ],
        '&:hover': {
          color: '#fff',
          backgroundColor: '#f7bb08' 
      },
      borderRadius: 'unset'
      }
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
