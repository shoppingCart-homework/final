import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRouter from './AppRouter';
import ProductList from './product/ProductList';
import EmployeeList from './employee/EmployeeList';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Main from './ui/Main';



const theme = createTheme({
  palette: {
    primary: {
      main: '#ffdb4d',
    },
    secondary: {
      main: '#ffcc00',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')

);


serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();