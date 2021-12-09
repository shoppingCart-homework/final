import React from 'react';

import {NavLink} from 'react-router-dom';

//import {Link} from 'react-router-dom';

import { AppBar, Button, Toolbar } from '@mui/material';

import { useTheme } from '@mui/material/styles';

 

export default function AppMenu() {
    const theme = useTheme();

    const activeStyle = { backgroundColor:theme.palette.third.main, color:"black" };

  return (

    <AppBar position="sticky">

      <Toolbar>

      <Button component={NavLink} to='/employee' activeStyle={activeStyle} color="inherit">三明治</Button>

        <Button component={NavLink} to='/product' activeStyle={activeStyle} color="inherit">蛋餅</Button>

        <Button component={NavLink} to='/product' activeStyle={activeStyle} color="inherit">漢堡</Button>

        <Button component={NavLink} to='/food' activeStyle={activeStyle} color="inherit">飲料</Button>

        
        <div >
        <Button  color="inherit" > 登入</Button>
        </div>
      </Toolbar>

    </AppBar>

  )



}