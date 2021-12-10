import React from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import {NavLink} from 'react-router-dom';
import {AuthContext, STATUS} from '../account/AuthContext';
import {useState,useContext} from 'react';

export default function AppMenu() {
  const authContext = useContext(AuthContext);

  return (
    <Box sx={{ width: 360 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs 
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
    >
        <Tab component={NavLink} to='/product' label="MENU"  color="inherit"/>
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/employee'  label="cart" color="inherit"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/newpage' label="Order"  color="inherit"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/complete' label="Completed"  color="inherit"/>
        }
          
        {authContext.status===STATUS.toSignOut?
        <Tab component={NavLink}  to='/' label="logout"  color="inherit"/>
        :
        <Tab component={NavLink}  to='/' label="login"  color="inherit"/>
      }
    </Tabs>
    </Box>
    </Box>

  )

}

/*
    <div>
      <AppMenu/>
      {authContext.status===STATUS.toSignOut?
      <Tab component={NavLink}  to='/' label="logout"  color="inherit"/>
      :
      <Tab component={NavLink}  to='/' label="login"  color="inherit"/>
      }
      
    </div>
status及setStatus在provider會被覆蓋
status為toSignIn 已註冊，將要登入
status為toSignOut 已登入，將要登出  
status為toSignUp 未註冊，將要註冊  
*/