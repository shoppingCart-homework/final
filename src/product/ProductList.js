import ProductAdd from './ProductAdd'

import React, {useState,useEffect, useContext} from 'react';

import {Box,List,ListItemIcon,ListItemButton,ListItemText,Button, ListItem,CircularProgress,IconButton} from '@mui/material';
import Divider from '@mui/material/Divider';
import { initializeApp } from "firebase/app";
import { collection ,getDocs,doc,setDoc, onSnapshot,query, orderBy,where,deleteDoc} from '@firebase/firestore';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import { getFirestore } from "firebase/firestore";
import AppMenu from '../ui/AppMenu';
import {config} from '../settings/firebaseConfig';
import Edit from '@mui/icons-material/Edit';
import SignOut from '../account/SignOut';
import {NavLink} from 'react-router-dom';
import ImageUpload2 from '../ui/ImageUpload2'

import {AuthContext, STATUS} from '../account/AuthContext';



const firebaseApp = initializeApp(config);
   const db = getFirestore();

export default function ProductList() {

  const authContext = useContext(AuthContext);

    const[selectedIndex,setSelectedIndex]=React.useState(1);

 

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
      const [products,setProducts]=useState([

        
    
       ]);
      useEffect(()=>{

        async function readData() {
          //var citiesRef = collection(db, "product");
          //const q = await getDocs(query(citiesRef, where("price", ">=", 10000)));
         
          setIsLoading(true);
          
          const querySnapshot = await getDocs(collection(db, "product"));
    
          const temp = [];
         //q.foreach(doc) => ........
          querySnapshot.forEach((doc) => {
    
          // doc.data() is never undefined for query doc snapshots
    
            console.log(doc.id, " => ", doc.data());
    
            temp.push({id:doc.id,desc:doc.data().desc, price:doc.data().price});
    
          
    
          });
    
          console.log(temp);
    
          setProducts([...temp]);
          setIsLoading(false);
        }
    
        readData();
    
      },[db],);

   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };
 
   const handleClose = () => {
     setOpen(false);
   };

   

  const insert = function(newProduct){

    
      setProducts(oldProducts=>[...oldProducts, newProduct]);
    
  }
  
  /*const q = query(collection(db, "product"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const product = [];
  querySnapshot.forEach((doc) => {
    product.push({id:doc.id,desc:doc.data().desc, price:doc.data().price});
  });
  setProducts([...product]);
  console.log("AAA");
});
  */
const[deleted,setDeleted]=React.useState(0);


const deleteData = async function(id){

  try{
    (authContext.status===STATUS.toSignIn)?

    <Box></Box>:

    setIsLoading(true);

    await deleteDoc(doc(db, "product", id));

    //console.log("deleted");

    setDeleted(deleted+1);

    setIsLoading(false);

  }

  catch (error){

    console.log(error);

  }

}

const [product, setProduct] = useState({desc:"",price:0})
const handleClick = function(e){

  setProduct({...product,[e.target.name]:e.target.value})

}
const edit = async function(product){

  try{
    
    console.log(productid);
    await setDoc(doc(db,"product",productid),{

      desc:product.desc,

      price:parseInt(product.price)

    });

    //console.log(setDoc.id);
    
    handleClose();
  }

  catch(e){

    console.log(e);

  }
 
  
}
const[productid,setProductid]=useState(0);


const editButton =  function(product){
  (authContext.status===STATUS.toSignIn)?

    <Box></Box>:
  
handleClickOpen();
//setProduct({desc:"",price:300});
//console.log(product.id);
setProduct({desc:product.desc,price:product.price})

 setProductid(product.id);
  
}



  const [isLoading, setIsLoading] = useState(false);

  const ProductListComponent = function (){

    return (

      <List subheader="Product list" aria-label="product list">
        
        
      {
      
      products.map((product, index) => 

        <ListItem divider key={index}>

          <ListItemText primary={product.desc} secondary={"NT$"+product.price}></ListItemText>

          <IconButton edge="end" aria-label="edit" onClick={()=>editButton(product)}>
          <EditIcon />
          </IconButton> 

          <IconButton edge="end" aria-label="delete" onClick={()=>deleteData(product.id)}>
          <DeleteIcon />
          </IconButton> 

          
      

        </ListItem>)}


      </List>

    )

  }
  

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
<AppMenu/>
{
          (authContext.status===STATUS.toSignIn)?

          <Button variant="contained" color="primary" component={NavLink} to='/'  sx={{

            position: "fixed",
            
            top: (theme) => theme.spacing(10),
            
            right: (theme) => theme.spacing(2)}}>登入</Button>:
          <SignOut/>
        }
        <ImageUpload2/>

{!isLoading ?

<ProductListComponent/>

 :

<CircularProgress />

}
<Dialog open={open} onClose={handleClose}>


產品描述:<Input type="text" name="desc" value={product.desc} onChange={handleClick}/><br/>

產品價格:<Input type="number" name="price" value={product.price} onChange={handleClick}/><br/>

<Button variant="contained" color="primary" onClick={()=>edit(product)}>編輯</Button>





</Dialog>

      <List subheader="Product list" component="nav" aria-label="main mailbox folders">
          
 
        <ProductAdd update={insert}/>
        
        

      </List>
      <Divider />
      
      

    </Box>
  );


  

}