import React, {useState,useEffect,useContext} from 'react';
import {Input, Box, Dialog, Button, Fab} from '@mui/material';
import { collection, addDoc,setDoc,doc,getFirestore } from "firebase/firestore";
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
const firebaseApp = initializeApp(config);
const db = getFirestore();
export default function ProductAdd(props) {
  const authContext = useContext(AuthContext);
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
      {(authContext.status===STATUS.toSignIn)?
      <Box></Box>:
      <Fab color="primary" aria-label="Add" onClick={handleClickOpen}>
      +
      </Fab>
      }
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

