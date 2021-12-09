import React, {useState,useContext} from 'react';

import {Button} from '@mui/material';

import { getApps, initializeApp } from "firebase/app";



import { getAuth, signOut } from "firebase/auth";

import {config} from '../settings/firebaseConfig';

import {NavLink} from 'react-router-dom';

import {AuthContext, STATUS} from '../account/AuthContext';

//import { Box } from '@mui/system';



export default function SignOut(props) {

  const authContext = useContext(AuthContext);

  if (getApps().length===0) {

    initializeApp(config);

  }

  const [message, setMessage] = useState("");

  const handleSubmit = async function(){

    try {

      const auth = getAuth();

      authContext.setStatus(STATUS.toSignIn);

      await signOut(auth);

      setMessage("");

      

    }

    catch(error){

      setMessage(""+error);

    }

  }

  

  return(

    

    <form>

      <Button variant="contained" color="primary" component={NavLink} to='/' onClick={handleSubmit} sx={{

position: "fixed",

top: (theme) => theme.spacing(10),

right: (theme) => theme.spacing(2)}}>登出</Button>

      {message}<br/>

    </form>

    

  )

}