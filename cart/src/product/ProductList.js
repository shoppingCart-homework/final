import ProductAdd from './ProductAdd'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, {useState,useEffect,useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import {Box,List,ListItemIcon,ListItemButton,ListItemText,Button, ListItem,CircularProgress,IconButton} from '@mui/material';
import { initializeApp } from "firebase/app";
import { collection ,getDocs,doc,setDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc} from '@firebase/firestore';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { getFirestore } from "firebase/firestore";
import AppMenu from '../ui/AppMenu';
import {config} from '../settings/firebaseConfig';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Edit from '@mui/icons-material/Edit';
import ImageUpload from '../ui/ImageUpload';
import Icon from '@mui/material/Icon';
import TextField from '@mui/material/TextField';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { getAuth} from "firebase/auth";
const firebaseApp = initializeApp(config);
const db = getFirestore();
// 先拿帳號出來
const auth = getAuth();
const user = auth.currentUser;
if(user) {
  // 使用者已登入，可以取得資料
  var email = user.email;
  var uid = user.uid;
  console.log(email, uid);
} else {
  console.log("沒登入");
  // 使用者未登入
}
/*
//試著寫一下（還沒寫完）
// 收集表格：搜尋登入的email有沒有ctstate==0的購物車
const ctRef = db.collection('cart');
const ctRef2 = await ctRef.where('ctstate', '==', 0).get();
const snapshot = await ctRef2.where('useremail','==',account.email).get();

if (snapshot.empty) { 
// 如果「沒有」待結帳的商品：最大cart_id++，並把商品加入該cart的ctcontent
  console.log('沒有待結帳的商品');
  
  const useremail = doc.data().useremail;
  //搜尋一下最大id
  const cartRes = await ctRef.orderBy().limit(1).get(); //依照id大小排序
  const maxid = doc.id
  const cartid = parseInt(maxid) + 1; 
  //新增cart裡的文件
  await setDoc(doc(db, "cart", cartid), {
  ctaddress: ,
  ctstate: 0,
  useremail: account.email
  //新增ctcontent
  await setDoc(doc(db, "ctcontent", product.bfname), {
  bfname: product.bfname,
  bfquantity: 1,
  useremail: account.email
  });

  });

  return;
}
else{
// 如果「有｣待結帳的商品：選定該cart，並加入content
  const useremail = doc.data().useremail;
  //搜尋一下最大id
  const cartRes = await ctRef.orderBy().limit(1).get(); //依照id大小排序
  const maxid = doc.id
  //新增cart裡的文件
  await setDoc(doc(db, "cart", maxid), {
  ctaddress: ,
  ctstate: 0,
  useremail: account.email
  //新增ctcontent
  await setDoc(doc(db, "ctcontent", product.bfname), {
  bfname: product.bfname,
  bfquantity: 1,
  useremail: account.email
  });

  });

  return;

}


*/

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
            temp.push({id:doc.id,bfdesc:doc.data().bfdesc,bfname:doc.data().bfname, bfprice:doc.data().bfprice,bfimage:doc.data().bfimage});
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

const [product, setProduct] = useState({bfname:"",bfprice:0,bfimage:"",bfdesc:""})
const handleClick = function(e){
  setProduct({...product,[e.target.name]:e.target.value})
}
const edit = async function(product){
  try{
    console.log(productid);
    await updateDoc(doc(db,"breakfast",productid),{
      bfprice:parseInt(product.bfprice),
      bfname:product.bfname,
      bfdesc:product.bfdesc
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
  const ImList=function(){
    return(
      <Stack sx={{ width: '100%' ,maxWidth: 360}} spacing={2}>
        {products.map((product, index) => 
        <Card>
       <CardContent divider key={index}>
        <CardMedia
            component="img"
            height="140"
            image={product.bfimage}
          />
       <Typography gutterBottom variant="h5" component="div">
         {product.bfname}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {product.bfdesc}<br/>
         {"NT$"+product.bfprice}
       </Typography>
          <CardActions>
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button variant="contained" startIcon={<ShoppingCartIcon/>}>購物車</Button>
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button onClick={()=>editButton(product)} variant="contained" startIcon={<Edit/>}>編輯</Button>
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button onClick={()=>deleteData(product.id)} variant="contained" startIcon={<DeleteIcon/>}>刪除</Button>
          }
          </CardActions>
     </CardContent>
     </Card>
      )}
      </Stack>
    )
  }
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
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
          <IconButton edge="end" aria-label="cart">
          <AddShoppingCartIcon  />
          </IconButton> 
          }
        </ListItem>)}

      </List>
      
      
    )

  }
  

  return (
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

<AppMenu/>
<ImList/>
{!isLoading ?
<ProductListComponent/>
 :
<CircularProgress />

}

<Dialog open={open} onClose={handleClose}>
<DialogTitle id="alert-dialog-title">{"修改產品"}
</DialogTitle>
<DialogContent>
產品描述:<Input type="text" name="bfname" value={product.bfname} onChange={handleClick} /><br/>
產品價格:<Input type="number" name="bfprice" value={product.bfprice} onChange={handleClick}/><br/>
產品敘述:
<Input type = "text" name = "bfdesc" value={product.bfdesc} onChange={handleClick}/>
</DialogContent>
<DialogActions>
<Button variant="contained" color="primary" onClick={()=>edit(product)}>編輯</Button>
<Button onClick={handleClose}>關閉</Button>
</DialogActions>
</Dialog>



<ProductAdd update={insert}/>

    
    </Box>
  );
  

}