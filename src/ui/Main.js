import React, {useState,useContext} from 'react';

import AppMenu from './AppMenu';

//import {Link} from 'react-router-dom';

import { Box, Button } from '@mui/material';

import { useNavigate } from "react-router-dom";

import SignUp from '../account/SignUp';

import SignIn from '../account/SignIn';

import SignOut from '../account/SignOut';

import {AuthContext, STATUS} from '../account/AuthContext';

export default function Main() {
  
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClick = function (link) {

    navigate(link);

  }

  return (

    <Box>
    <AppMenu/>
    <Button variant="contained" color="secondary" onClick={()=>handleClick("/employee")}>Employee</Button>

    <Button variant="contained" color="primary" onClick={()=>handleClick("/product")}>Product</Button>

<Button variant="contained" color="third" onClick={()=>handleClick("/food")}>food</Button>

{authContext.status===STATUS.toSignUp?

      <SignUp />

      :authContext.status===STATUS.toSignIn?

      <SignIn />

      :

      <SignOut />

      }
    </Box>

  )



}