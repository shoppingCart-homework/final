import React from 'react';

import {NavLink} from 'react-router-dom';

//import {Link} from 'react-router-dom';

import { AppBar, Button, Toolbar } from '@mui/material';

import { useTheme } from '@mui/material/styles';

 

export default function AppMenu() {
    const theme = useTheme();

    const activeStyle = { backgroundColor:theme.palette.secondary.main, color:"black" };

  return (

    <AppBar position="sticky">

      <Toolbar>

      <Button component={NavLink} to='/employee' activeStyle={activeStyle} color="inherit">employee</Button>

        <Button component={NavLink} to='/product' activeStyle={activeStyle} color="inherit">product</Button>
        <Button component={NavLink} to='/food' activeStyle={activeStyle} color="inherit">food</Button>

        
        <div >
        <Button  color="inherit" > 登入</Button>
        </div>
      </Toolbar>

    </AppBar>

  )



}