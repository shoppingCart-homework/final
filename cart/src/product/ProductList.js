import ProductAdd from './ProductAdd'

import React, {useState,useEffect,useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
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
import ImageUpload from '../ui/ImageUpload';


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
    
      },[db]);

      const unsub = onSnapshot(doc(db, "product", "SF"), (doc) => {
        console.log("Current data: ", doc.data());
      });

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
const [deleted,setDeleted]=useState([]);

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
  }

  catch(e){
    console.log(e);
  }
 
  
}
const[productid,setProductid]=useState(0);
const editButton =  function(product){
  
handleClickOpen();
//setProduct({desc:"",price:300});
//console.log(product.id);
 setProductid(product.id); 
}

  const [isLoading, setIsLoading] = useState(false);
  const ProductListComponent = function (){
    return (
      <List subheader=" " aria-label="product list">

      {products.map((product, index) => 
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
    <Box sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
<AppMenu/>

{!isLoading ?
<ProductListComponent/>
 :
<CircularProgress />
}

<Dialog open={open} onClose={handleClose}>
產品描述:<Input type="text" name="desc" value={product.desc} onChange={handleClick}/><br/>
產品價格:<Input type="number" name="price" value={product.price} onChange={handleClick}/><br/>
<Button variant="contained" color="primary" onClick={()=>edit(product)}>編輯</Button>
<Button onClick={handleClose}>關閉</Button>

</Dialog>


      <List subheader=" " component="nav" aria-label="main mailbox folders">
        <ProductAdd update={insert}/>
      </List>
    
    <Divider />
    <ImageUpload/>
    </Box>
  );
  

}