import { install } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

install();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const theme = createMuiTheme({
    "palette": {
        "common": { "black": "#000", "white": "#fff" },
        "background": { "paper": "#fff", "default": "#fafafa" },
        "primary": {
            "light": "rgba(184, 233, 134, 1)",
            "main": "rgba(118, 199, 29, 1)", "dark": "rgba(65, 117, 5, 1)",
            "contrastText": "rgba(255, 255, 255, 1)"
        },
        "secondary": {
            "light": "rgba(255, 251, 64, 1)", "main": "rgba(255, 194, 54, 1)",
            "dark": "rgba(244, 205, 9, 1)", "contrastText": "#fff"
        },
        "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" },
        "text": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)" }
    }
}
);

ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <MuiThemeProvider theme={theme}>
            <App />
            </MuiThemeProvider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
