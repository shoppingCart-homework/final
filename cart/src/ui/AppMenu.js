import React from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import {NavLink} from 'react-router-dom';
import {AuthContext, STATUS} from '../account/AuthContext';
import {useState,useContext} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CookieIcon from '@mui/icons-material/Cookie';
import CheckIcon from '@mui/icons-material/Check';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Home from '@mui/icons-material/Home';
export default function AppMenu() {
  const authContext = useContext(AuthContext);

  return (
    
    <Box sx={{ width: 360 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs 
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="icon position tabs example"
    >   
        <Tab component={NavLink} to='/homepage' label="HOME"  color="inherit" icon={<HomeIcon/>} iconPosition="start"/>
        
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
        <Tab component={NavLink} to='/product' label="MENU"  color="inherit" icon={<MenuIcon/>} iconPosition="start"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/employee'  label="cart" color="inherit" icon={<ShoppingCartIcon/>} iconPosition="start"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/newpage' label="Order"  color="inherit" icon={<CookieIcon/>} iconPosition="start"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/complete' label="Completed"  color="inherit" icon={<CheckIcon/>} iconPosition="start"/>
        }
          
        {authContext.status===STATUS.toSignOut?
        <Tab component={NavLink}  to='/' label="logout"  color="inherit" icon={<SentimentVeryDissatisfiedIcon/>} iconPosition="start"/>
        :
        <Tab component={NavLink}  to='/' label="login"  color="inherit" icon={<SentimentVerySatisfiedIcon/>} iconPosition="start"/>
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