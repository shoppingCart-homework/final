import React, {useState, useContext} from 'react';
import {Button} from '@mui/material';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import {ListItemText} from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
//import { Box } from '@mui/system';

export default function SignOut() {
  if (getApps().length===0) {
    initializeApp(config);
  }
  
  

  const authContext = useContext(AuthContext);
  const [message, setMessage] = useState("");
  
  const handleSubmit = async function(){

    try {

      const auth = getAuth();
      await signOut(auth);
      setMessage("");
      authContext.setStatus(STATUS.toSignIn);
    }
    catch(error){
      setMessage(""+error);
    }
  }
const auth = getAuth();
const user = auth.currentUser;
if(user) {
  // 使用者已登入，可以取得資料
  var email = user.email;
  var uid = user.uid;
  console.log(email, uid);
} else {
  // 使用者未登入
}
  return(

    <form>
      <Stack sx={{ width: '100%' ,maxWidth: 360}} spacing={2}>
      <Alert severity="success">
        <AlertTitle><strong>登入成功</strong></AlertTitle>
        使用帳號：{email}
      </Alert>
      </Stack>
      <Button variant="contained" color="primary" onClick={handleSubmit}>登出</Button>
      {message}<br/>
      
    </form>    

  )
}