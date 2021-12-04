import React, {useState,useEffect} from 'react';
import { Box, List, ListItem, ListItemText, CircularProgress,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, onSnapshot,deleteDoc } from "firebase/firestore";
import AppMenu from '../ui/AppMenu';
import {config} from '../settings/firebaseConfig';
import ProductSet from './ProductSet';
 
 
 
const firebaseApp = initializeApp(config);
const db = getFirestore();
export default function ProductList() {
    const deleteData = async function(id){
        try{
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
   
    const [products,setProducts]=useState([]);
    const [deleted,setDeleted]=useState([]);
    const [open,setOpen]=useState([]);
       useEffect(()=>{
 
        async function readData() {
   
          setIsLoading(true);
          const querySnapshot = await getDocs(collection(db, "product"));
          const temp = [];
          querySnapshot.forEach((doc) => {
            temp.push({id:doc.id, desc:doc.data().desc, price:doc.data().price});    
          });
          setProducts([...temp]);
          setIsLoading(false);
        }
   
        readData();
   
      },[db, open, deleted]);
 
      const unsub = onSnapshot(doc(db, "product", "SF"), (doc) => {
        console.log("Current data: ", doc.data());
      });
   
      const insert = function(newProduct){
        setProducts(oldProducts=>[...oldProducts, newProduct]);
      }
 
      const [isLoading, setIsLoading] = useState(false);
 
      const ProductListComponent = function (){
 
        return (
   
          <List subheader=" " aria-label="product list">
          {products.map((product, index) =>
            <ListItem divider key={index}>
              <ListItemText primary={product.desc} secondary={"NT$"+product.price}></ListItemText>
              <IconButton edge="end" aria-label="edit">
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
 
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundColor: 'background.paper',
      color: 'black',
      textAlign: 'left'
    }}>
 
      <AppMenu/>
      {!isLoading ?
      <ProductListComponent/>
       :
        <CircularProgress />
        }
      <ProductSet update={insert}/>
    </Box>
  );
 
}
