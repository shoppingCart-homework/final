import React from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import {NavLink} from 'react-router-dom';


 

export default function AppMenu() {


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs >
        <Tab component={NavLink} to='/product' label="product"  color="inherit"/>
        <Tab component={NavLink}  to='/employee'  label="employee" color="inherit"/>
        <Tab component={NavLink}  to='/newpage' label="newpage"  color="inherit"/>
    </Tabs>
    </Box>
    </Box>

  )



}