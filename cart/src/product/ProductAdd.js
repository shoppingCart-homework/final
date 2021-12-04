import React, {useState,useEffect,useContext} from 'react';
import {Input, Box, Dialog, Button, Fab} from '@mui/material';
import { collection, addDoc,setDoc,doc,getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {config} from '../settings/firebaseConfig';
import {AuthContext, STATUS} from '../account/AuthContext';

const firebaseApp = initializeApp(config);
const db = getFirestore();
export default function ProductAdd(props) {
  const authContext = useContext(AuthContext);
  const [product, setProduct] = useState({desc:"",price:0})



  const handleClick = function(e){

    setProduct({...product,[e.target.name]:e.target.value})

  }

  const edit = async function(product){
    try{
      await setDoc(doc(db,"product",product.id),{
        desc:product.desc,
        price:parseInt(product.price)
      });
      console.log(setDoc.id);
    }

    catch(e){
      console.log(e);
    }
    props.update(product);
  }

  const update = async function(){
    try{
      const docRef = await addDoc(collection(db,"product"),{
        desc:product.desc,
        price:parseInt(product.price)
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

產品描述:<Input type="text" name="desc" value={product.desc} onChange={handleClick}/><br/>
產品價格:<Input type="number" name="price" value={product.price} onChange={handleClick}/><br/>
<Button variant="contained" color="primary" onClick={update}>新增</Button>
<Button onClick={handleClose}>關閉</Button>
</Dialog>
    </div>

  );

}

