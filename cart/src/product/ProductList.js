import ProductAdd from './ProductAdd'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, {useState,useEffect,useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import {Box,List,ListItemIcon,ListItemButton,ListItemText,Button, ListItem,CircularProgress,IconButton} from '@mui/material';
import Divider from '@mui/material/Divider';
import { initializeApp } from "firebase/app";
import { collection ,getDocs,doc,setDoc, onSnapshot,query, orderBy,where,deleteDoc} from '@firebase/firestore';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import { getFirestore } from "firebase/firestore";
import AppMenu from '../ui/AppMenu';
import {config} from '../settings/firebaseConfig';
import Edit from '@mui/icons-material/Edit';
import ImageUpload from '../ui/ImageUpload';
import InfoIcon from '@mui/icons-material/Info';
import Icon from '@mui/material/Icon';
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
          const querySnapshot = await getDocs(collection(db, "breakfast"));
    
          const temp = [];
         //q.foreach(doc) => ........
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            temp.push({id:doc.id,bfname:doc.data().bfname, bfprice:doc.data().bfprice,bfimage:doc.data().bfimage,bfclass:doc.data().bfclass});
          });
    
          console.log(temp);
          setProducts([...temp]);
          setIsLoading(false);
        }
    
        readData();
    
      },[db]);

      const unsub = onSnapshot(doc(db, "breakfast", "SF"), (doc) => {
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


const [deleted,setDeleted]=useState([]);

const deleteData = async function(id){

  try{
    setIsLoading(true);
    await deleteDoc(doc(db, "breakfast", id));
    //console.log("deleted");
    setDeleted(deleted+1);
    setIsLoading(false);
  }
  catch (error){
    console.log(error);
  }

}

const [product, setProduct] = useState(false)
const handleClick = function(e){
  setProduct({...product,[e.target.name]:e.target.value})
}
const edit = async function(product){
  try{
    console.log(productid);
    await setDoc(doc(db,"breakfast",productid),{
      bfclass:product.bfclass,
      bfprice:parseInt(product.bfprice),
      bfimage:product.bfimage,
      bfname:product.bfname
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
      <ImageList sx={{ width: 360, height: 180 }} cols={2}>
      
      {products.map((item) => (
        <ImageListItem key={item.bfimage}>
          <img
            src={`${item.bfimage}`}
            srcSet={`${item.bfimage}`}
            alt={item.bfname}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.bfname}
            subtitle={"NT$"+item.bfprice}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.bfname}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
      

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
    
    </Box>
  );
  

}