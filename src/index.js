import React from 'react';
import ReactDOM from 'react-dom';
import Rotas from './Rotas';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Create a new theme using Nunito Sans
const theme = createMuiTheme({
  palette:{
    primary: {
      main: "#0E064F",
    },
    secondary: {
      main: "#081CAF",
    },
    error: {
      main: "#0146C7",
    },
    info: {
      main: "#439FE0",
    },
    success: {
      main: "#7DC6D5",
    }
  },
  typography: {
    fontFamily: ['Nunito'].join(','),
    h1: {
      fontSize:69,
      fontWeight: 'bold'
    },
    h2: {
      fontSize: 53,
      fontWeight: 300,
    },
    h3:{
      fontSize: 40,
      fontWeight: 300,
    },
    h4:{
      fontSize: 31,
      color: "#383743"
    },
    h5:{
      fontSize: 24,
      color: "#383743"
    },
    h6:{
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.25,
      letterSpacing: 1.04
    },    
    subtitle2: {
      fontSize: 13,
      letterSpacing: 0.58
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.51,
      color: "#66647a"
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.51,
      color: "#383743",
      fontWeight: 300,
    },
    button: {
      fontSize: 12,
      letterSpacing: 0.6,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 12,
      fontWeight: 300
    },
    overline: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: 2,
      marginTop: '10px'
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Rotas />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
