import React, {useState,useEffect,useContext} from 'react';
import {Input, Box, Dialog, Button, Fab} from '@mui/material';
import { collection, addDoc,setDoc,doc,getFirestore,getDocs,query,where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import DialogContentText from '@mui/material/DialogContentText';
import Upload from '../ui/Upload';
import Swal from 'sweetalert2';
import { getAuth} from "firebase/auth";
import {List} from '@mui/material';
const firebaseApp = initializeApp(config);
const db = getFirestore();
export default function ProductAdd(props) {
  const authContext = useContext(AuthContext);
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
    // 使用者已登入，可以取得資料
    var email = user.email;
    var uid = user.uid;
    console.log("loginemail:"+email);
  } else {
    console.log("沒有登入");
    // 使用者未登入
  }
  const [isLoading, setIsLoading] = useState(false);
  const [userss,setUsersss]=useState([]);
  useEffect(()=>{

    async function readData() {
      //var citiesRef = collection(db, "product");
      //const q = await getDocs(query(citiesRef, where("price", ">=", 10000)));
      setIsLoading(true);
      var citiesRef = collection(db, "user");
      const q = await getDocs(query(citiesRef, where("useremail", "==", user.email)));

      const tempU = [];
     //q.foreach(doc) => ........
      q.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tempU.push({useremail:doc.data().useremail, userauth:doc.data().userauth,username:doc.data().username});
      });

      console.log(tempU);
      setUsersss([...tempU]);
      setIsLoading(false);
    }

    readData();

  },[db]);
  const [product, setProduct] = useState({bfname:"",bfprice:0,bfimage:"",bfdesc:""})

  const handleClick = function(e){
    setProduct({...product,[e.target.name]:e.target.value})
  }
  
  const update = async function(){
    try{
      const docRef = await addDoc(collection(db,"breakfast"),{
        bfprice:parseInt(product.bfprice),
        bfimage:change(product.bfimage),
        bfname:product.bfname,
        bfdesc:product.bfdesc
        });
      console.log(docRef.id);
    }

    catch(e){
      console.log(e);
    }
    props.update(product);
    Swal.fire({
      icon: 'success',
      title: '新增成功，請重新刷新頁面'
    })
    
  }
  function change(a)
  {
    return("https://firebasestorage.googleapis.com/v0/b/appcart-39b32.appspot.com/o/"+a+"?alt=media");
  }
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      {userss.map((usersa) => 
          <Box>
          {(usersa.userauth!="1")?
          <Box></Box>:
          <List>
          <Fab color="primary" aria-label="Add" onClick={handleClickOpen}>
      +
      </Fab>
      </List>
          }
          </Box>
      )}
      
<Dialog open={open} onClose={handleClose}>
<DialogTitle id="alert-dialog-title">{"新增產品"}
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
產品名稱:<Input type="text" name="bfname" value={product.bfname} onChange={handleClick}/><br/>
產品價格:<Input type="number" name="bfprice" value={product.bfprice} onChange={handleClick}/><br/>
產品敘述:<Input type="text" name="bfdesc" value={product.bfdesc} onChange={handleClick}/><br/>
圖片檔名:<Input type="text" name="bfimage" value={product.bfimage} onChange={handleClick}/><br/>

<FormHelperText id="outlined-weight-helper-text">請完整輸入檔名(例：微笑薯餅.jpg)</FormHelperText>
<Upload/>
</DialogContentText>
</DialogContent>
<DialogActions>
<Button variant="contained" color="primary" onClick={update}>新增</Button>
<Button onClick={handleClose}>關閉</Button>
</DialogActions>
</Dialog>
    </div>
  );
}

