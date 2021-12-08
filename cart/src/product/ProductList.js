import ProductAdd from './ProductAdd'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, {useState,useEffect,useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import {Box,List,ListItemIcon,ListItemButton,ListItemText,Button, ListItem,CircularProgress,IconButton} from '@mui/material';
import Divider from '@mui/material/Divider';
import { initializeApp } from "firebase/app";
import { collection ,getDocs,doc,setDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc} from '@firebase/firestore';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { getFirestore } from "firebase/firestore";
import AppMenu from '../ui/AppMenu';
import {config} from '../settings/firebaseConfig';
import Edit from '@mui/icons-material/Edit';
import ImageUpload from '../ui/ImageUpload';
import InfoIcon from '@mui/icons-material/Info';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
const firebaseApp = initializeApp(config);
   const db = getFirestore();

export default function ProductList() {
    const authContext = useContext(AuthContext);
    const[selectedIndex,setSelectedIndex]=React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
      };
      const [products,setProducts]=useState([]);
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
            temp.push({id:doc.id,bfname:doc.data().bfname, bfprice:doc.data().bfprice,bfimage:doc.data().bfimage});
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

const [product, setProduct] = useState({bfname:"",bfprice:0,bfimage:""})
const handleClick = function(e){
  setProduct({...product,[e.target.name]:e.target.value})
}
const edit = async function(product){
  try{
    console.log(productid);
    await updateDoc(doc(db,"breakfast",productid),{
      bfprice:parseInt(product.bfprice),
      bfname:product.bfname
    });
  }

  catch(e){
    console.log(e);
  }
 
  
}
const[productid,setProductid]=useState(0);
const editButton =  function(product){
  handleClickOpen();
  setProductid(product.id); 
}

  const [isLoading, setIsLoading] = useState(false);
  const ProductListComponent = function (){
    return (
      
      <List>
      {products.map((product, index) => 
        <ListItem divider key={index}>
          <ImageList sx={{ width: 85, height: 85 }} cols={1}>
          <ImageListItem key={product.image} >
          <img
            src={`${product.bfimage}`}
            srcSet={`${product.bfimage}`}
            
          />
        </ImageListItem>
        </ImageList>
        
          <ListItemText primary={product.bfname} secondary={"NT$"+product.bfprice}></ListItemText>
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
          <IconButton edge="end" aria-label="edit" onClick={()=>editButton(product)}>
          <EditIcon />
          </IconButton> 
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
          <IconButton edge="end" aria-label="delete" onClick={()=>deleteData(product.id)}>
          <DeleteOutlinedIcon />
          </IconButton> 
          }
        </ListItem>)}

      </List>
    )

  }
  

  return (
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
<AppMenu/>

{!isLoading ?
<ProductListComponent/>
 :
<CircularProgress />
}

<Dialog open={open} onClose={handleClose}>
<DialogTitle id="alert-dialog-title">{"修改/刪除產品"}
</DialogTitle>
<DialogContent>
產品描述:<Input type="text" name="bfname" value={product.bfname} onChange={handleClick} /><br/>
產品價格:<Input type="number" name="bfprice" value={product.bfprice} onChange={handleClick}/><br/>

</DialogContent>
<DialogActions>
<Button variant="contained" color="primary" onClick={()=>edit(product)}>編輯</Button>
<Button onClick={handleClose}>關閉</Button>
</DialogActions>
</Dialog>


      <List subheader=" " component="nav" aria-label="main mailbox folders">
        <ProductAdd update={insert}/>
      </List>
    
    <Divider />
    
    </Box>
  );
  

}