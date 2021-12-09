import React, {useState, useContext} from 'react';
import {Button, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

const firebaseApp = initializeApp(config);
const db = getFirestore();

export default function SignUp() {
  if (getApps().length===0) {
    initializeApp(config);
  }
  const authContext = useContext(AuthContext);
  const [account, setAccount] = useState({email:"",password:"", displayName:""});
  const [message, setMessage] = useState("");
  const handleChange = function(e){
    setAccount({...account,[e.target.name]:e.target.value})
  }
  const handleSubmit = async function(){

    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, account.email, account.password);
      if (res) {
        await updateProfile(auth.currentUser,{displayName: account.displayName});
        authContext.setStatus(STATUS.toSignIn);

        const docRef = await addDoc(collection(db,"user"),{
          userauth:parseInt("0"),
          useremail:account.email,
          username:account.name
        });
        console.log(docRef.id);

      }
      setMessage("");
    }

    catch(error){
      setMessage(""+error);
    }

  }
  const changeStatus = function(){
    authContext.setStatus(STATUS.toSignIn);
  }
  

  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <form>
      <TextField type = "text" name = "name" value={account.name} 
        placeholder="姓名" label="姓名:" onChange={handleChange} /><br/>
      <TextField type = "email" name = "email" value={account.email} 
        placeholder="電子郵件信箱" label="電子郵件信箱:" onChange={handleChange} autoComplete="email"/><br/>
      <TextField type = "password" name = "password" value={account.password}
        placeholder="密碼" label="密碼:" onChange={handleChange} autoComplete="current-password"/><br/>
      {message}<br/>
      <Stack spacing={0.5} direction="row">
      <Button variant="contained" color="primary" onClick={handleSubmit}>註冊</Button>
      <Button variant="contained" color="secondary" onClick={changeStatus}>我要登入</Button>
      </Stack>
    </form>
    </Box>
    

  )

}