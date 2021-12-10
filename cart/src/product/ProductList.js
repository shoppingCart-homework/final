import ProductAdd from './ProductAdd'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import React, {useState,useEffect,useContext} from 'react';
import {AuthContext, STATUS} from '../account/AuthContext';
import {Box,List,ListItemIcon,ListItemButton,ListItemText,Button, ListItem,CircularProgress,IconButton} from '@mui/material';
import { initializeApp } from "firebase/app";
import { collection ,getDocs,doc,setDoc,addDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit} from '@firebase/firestore';
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

// 收集表格：搜尋登入的email有沒有ctstate==0的購物車
const cartAdd = async function(bfname){
  //Unhandled Rejection (FirebaseError): Function where() called with invalid data. Unsupported field value: undefined
  const q = await query(collection(db,"cart"),where("ctstate", "==", 0),where("useremail","==",email));
  const snapshot = await getDocs(query(q) );
  console.log("bfname:",bfname,",email:",email);

  if (snapshot.empty) { 
  // 如果「沒有」待結帳的商品：最大cart_id++，並把商品加入該cart的ctcontent
    //搜尋一下最大id
    const maxid = await getDocs(query(collection(db,"cart"),orderBy("desc"),limit(1)) );
    const cartid = parseInt(doc.id) + 1; 
    //新增cart裡的文件
    try{
      const cartttRef = await addDoc(collection(db,"cart",cartid),collection(db,"ctcontent"),{
        bfname: bfname,
        bfquantity: 1,
        useremail: email
        });
        console.log(cartttRef.id);
      }catch(e){
        console.log(e);
      }
  }
  else{
  // 如果「有｣待結帳的商品：選定該cart，並加入content
    const maxid = await getDocs(query(collection(db,"cart"),orderBy("desc"),limit(1)) );
    const cartid = parseInt(doc.id); 
    // 錯誤訊息：Unhandled Rejection (TypeError): n.indexOf is not a function??
    try{
      const cartttRef = await addDoc(collection(db,"cart",cartid),collection(db,"ctcontent"),{
        bfname: bfname,
        bfquantity: 1,
        useremail: email
        });
        console.log(cartttRef.id);
      }catch(e){
        console.log(e);
      }
  }

}


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
          <CardMedia
            component="img"
            height="140"
            image={product.bfimage}
          />
       <CardContent divider key={index}>
        
       <Typography gutterBottom variant="h5" component="div">
         {product.bfname}
       </Typography>
       <Typography variant="body2" color="text.secondary">
         {product.bfdesc}<br/>
         {"NT$"+product.bfprice}
       </Typography>
       </CardContent>
          <CardActions>
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button onClick={()=>cartAdd(product.bfname)}  variant="contained" startIcon={<ShoppingCartIcon/>} color="secondary">加入購物車</Button>
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button style={{borderRadius:50}} onClick={()=>editButton(product)} variant="contained" startIcon={<Edit/>} color="primary" >編輯</Button>
            
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
            <Button style={{borderRadius:50}} onClick={()=>deleteData(product.id)} variant="contained" startIcon={<DeleteIcon/>} color="primary" >刪除</Button>
          }
          </CardActions>
     
     </Card>
      )}
      </Stack>
    )
  }
  
  

  return (
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

<AppMenu/>

{!isLoading ?
<ImList/>
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