import React, {useState, useContext} from 'react';
import {Button, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Swal from 'sweetalert2'
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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '輸入錯誤或帳號已被註冊。',
      })
    }

  }
  const changeStatus = function(){
    authContext.setStatus(STATUS.toSignIn);
  }
  function RedBar() {
    return (
      <Box
        sx={{
          height: 5,
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgb(255 132 132 / 25%)',
        }}
      />
    );
  }
  
  function ImageAvatars() {
    return (
      
      <Box
      sx={{
        width: '100%', maxWidth: 360, bgcolor: 'background.paper' 
      }}
      alignItems="center"
      >
      <RedBar/>
      <Alert severity="error">輸入錯誤或帳號已被註冊。</Alert>
      </Box>
    );
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
              <PersonAddAlt1Icon/>
            </Avatar>
          </Box>
        </Typography>
      <Typography variant="body2" align="center">
    <form>
      <TextField type = "text" name = "name" value={account.name} 
        placeholder="姓名" label="姓名:" onChange={handleChange} /><br/>
        <RedBar/>
      <TextField type = "email" name = "email" value={account.email} 
        placeholder="電子郵件信箱" label="電子郵件信箱:" onChange={handleChange} autoComplete="email"/><br/>
        <RedBar/>
      <TextField type = "password" name = "password" value={account.password}
        placeholder="密碼" label="密碼:" onChange={handleChange} autoComplete="current-password"/><br/>
      {message}<br/>
      
      <Button variant="contained" color="primary" onClick={handleSubmit}>註冊</Button>
      <Button variant="contained" color="secondary" onClick={changeStatus}>我要登入</Button>
      
    </form>
    </Typography>
    </CardContent>
    </Card>
    </Box>
    

  )

}