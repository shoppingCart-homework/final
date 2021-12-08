import React, {useState,useEffect,useContext} from 'react';
import {Input, Box, Dialog, Button, Fab} from '@mui/material';
import { collection, addDoc,setDoc,doc,getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import ImageUpload from '../ui/ImageUpload';
const firebaseApp = initializeApp(config);
const db = getFirestore();
export default function ProductAdd(props) {
  const authContext = useContext(AuthContext);
  const [product, setProduct] = useState({bfname:"",bfprice:0,bfimage:""})

  const handleClick = function(e){
    setProduct({...product,[e.target.name]:e.target.value})
  }
  
/*
  const edit = async function(product){
    try{
      await setDoc(doc(db,"breakfast",product.id),{
        bfprice:parseInt(product.bfprice),
        bfimage:product.bfimage,
        bfname:product.bfname
      });
      console.log(setDoc.id);
    }

    catch(e){
      console.log(e);
    }
    props.update(product);
  }
*/
  const update = async function(){
    try{
      const docRef = await addDoc(collection(db,"breakfast"),{
        bfprice:parseInt(product.bfprice),
        bfimage:product.bfimage,
        bfname:product.bfname
        });
      console.log(docRef.id);
    }

    catch(e){
      console.log(e);
    }
    props.update(product);
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
<Input type="text" name="bfimage" value={product.bfimage} onChange={handleClick}/>
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

