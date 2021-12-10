import React, {useState, useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import {Button, TextField} from '@mui/material';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

const firebaseApp = initializeApp(config);
const db = getFirestore();

export default function SignIn() {
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
      const res = await signInWithEmailAndPassword(auth, account.email, account.password);
      if (res) {
        // 登入
        authContext.setStatus(STATUS.toSignOut);
        // 新增資料
        
      }
      setMessage("");
    }

    catch(error){
      setMessage(""+error);
    }
  }
  const changeStatus = function(){
    authContext.setStatus(STATUS.toSignUp);
  }
  

  return(
    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0.5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
    <Card>
      <CardContent>
        <Typography>
          <Box display="flex" justifyContent="center" alignItems="center" p={2} >
            <Avatar>
              <LoginIcon/>
            </Avatar>
          </Box>
        </Typography>
        <Typography variant="body2" align="center">
        <form>
        
          <TextField type = "text" name = "email" value={account.email} 
          placeholder="電子郵件信箱" label="電子郵件信箱:" onChange={handleChange} autoComplete="email"/><br/>
          <TextField type = "password" name = "password" value={account.password}
          placeholder="密碼" label="密碼:" onChange={handleChange} autoComplete="current-password"/><br/>
          {message}<br/>
          <Button variant="contained" color="primary" onClick={handleSubmit}>登入</Button>
          <Button variant="contained" color="secondary" onClick={changeStatus}>註冊</Button>
        </form>
      </Typography>
      </CardContent>
    </Card>
    </Box>
    

  )

}