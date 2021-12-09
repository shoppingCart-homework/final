import React from 'react';

import ReactDOM from 'react-dom';

//import './index.css';
import App from './App';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppRouter from './AppRouter';



import ProductList from './product/ProductList';

import EmployeeList from './employee/EmployeeList';

import FoodDescription from './food/FoodDescription';

import CustomerList from './customer/CustomerList';

import Main from './ui/Main';



const theme = createTheme({

  palette: {

    primary: {

      main: '#f44336',

    },

    secondary: {

      main: '#F5B7B1',

    },
    third: {

      main: '#4caf50',

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



// If you want to start measuring performance in your app, pass a function

// to log results (for example: reportWebVitals(console.log))

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();