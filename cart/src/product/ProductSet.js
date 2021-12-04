import React, {useState} from 'react';
import {Input, TextField, Button, Dialog, DialogTitle} from '@mui/material';
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import {config} from '../settings/firebaseConfig';
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(config);
const db = getFirestore();

export default function ProductSet(props) {
  const [product, setProduct] = useState({desc:"",price:0});
  const [action, setDoc, doc] = useState();
  const handleClick = function(e){
    setProduct({...product,[e.target.name]:e.target.value})
  }

  const update = async function(){

    const db = getFirestore();

    try{

      if (action === "新增產品"){
        const docRef = await addDoc(collection(db,"product"),{
          desc:product.desc,
          price:parseInt(product.price)
          });
        console.log(docRef.id);
      }

      else {
        await setDoc(doc(db,"product",product.id),{
          desc:product.desc,
          price:parseInt(product.price)
        });
      }
    }
    catch(e){
      console.log(e);
    }
    props.close();
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  // Add a new document with a generated id.


  return (
    
    <div>
    <Button variant="outlined" onClick={handleClickOpen}>
    新增
    </Button>
        
    <Dialog open={open} onClose={handleClose} aria-labelledby="新增產品">
    <DialogTitle>新增產品</DialogTitle>
    <TextField name="desc" label ="產品描述" variant="outlined" value={product.desc} onChange={handleClick}/>
    產品價格:<Input type="number" name="price" value={product.price} onChange={handleClick}/><br/>
    <Button variant="contained" color="primary" onClick={update} >新增</Button>
    <Button onClick={handleClose}>關閉</Button>
    </Dialog>
    </div>
    

  );

}