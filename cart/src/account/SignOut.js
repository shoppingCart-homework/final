import React, {useState, useContext,useEffect} from 'react';
import {Button} from '@mui/material';
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import {ListItemText} from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';
import { Result } from 'antd-mobile';
import { SmileOutline } from 'antd-mobile-icons';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import {collectionGroup, getFirestore,collection ,getDocs,doc,setDoc,addDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit,getDoc} from '@firebase/firestore';
import Chip from '@mui/material/Chip';
import LogoutIcon from '@mui/icons-material/Logout';
export default function SignOut() {
  if (getApps().length===0) {
    initializeApp(config);
  }
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  

  const authContext = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [users,setUsername]=useState([]);
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
useEffect(()=>{
  async function readData() {
    //setIsLoading(true);
    var citiesRef = collection(db, "user");
    const querySnapshot = await getDocs(query(citiesRef, where("useremail", "==", email)));
    const temp = [];
   //q.foreach(doc) => ........
    querySnapshot.forEach((doc) => {
      temp.push(doc.data().username);
    });
    console.log(temp);
    setUsername([...temp]);
    //setIsLoading(false);
  }

  readData();

},[db]);
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

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}
const C=function(){
  return(
    <Card sx={{ maxWidth: 360 }}>
      <CardContent>
      
        <Typography align="center">
        <Chip
        avatar={<Avatar {...stringAvatar(email)} />}
        label={users}
        variant="outlined"
        /><br/>
        <RedBar/>
        <RedBar/>
        <RedBar/>
        <RedBar/>
        歡迎使用<br/>
        {email}
        </Typography>
        <RedBar/>
        <RedBar/>
        <RedBar/>
        <RedBar/>
        <Typography align="center">
        <Button variant="contained" color="primary" onClick={handleSubmit} startIcon={<LogoutIcon/>}>登出</Button>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}
  return(
    <Box>
      <C/>
    </Box>
    
   
    
  )
}