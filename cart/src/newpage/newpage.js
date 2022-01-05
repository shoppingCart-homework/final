import React, {useState,useEffect} from 'react';
import { Box, List, ListItem, ListItemText,CircularProgress} from '@mui/material';
import AppMenu from '../ui/AppMenu';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {collectionGroup, getFirestore,collection ,getDocs,doc,setDoc,addDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit,getDoc} from '@firebase/firestore';
import { initializeApp } from "firebase/app";
import {config} from '../settings/firebaseConfig';
import Swal from 'sweetalert2';
export default function Newpage() {
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const [products,setProducts]=useState([]);
  const [string,setstring]=useState([]);
  const [productsr,setProductsr]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
      useEffect(()=>{
        async function readData() {
          setIsLoading(true);
          var citiesRef = collection(db, "order");
          const q = await getDocs(query(citiesRef, where("state", "==", 0)));
          //temp裝未完成訂單user
          const temp = [];
          //tempu裝未完成訂單id
          const tempu=[];
         //q.foreach(doc) => ........
          q.forEach(async (doc) => {
            //訂購人email地址等資訊
            console.log(doc.id, " => ", doc.data());
            tempu.push("order/"+doc.id+"/content");
            //console.log("order/"+doc.id+"/content");
            let strr="order/"+doc.id+"/content";
            const citiesRefi = collection(db, strr);
            const querySnapshoti = await getDocs(citiesRefi);
            const tempudetail=[];
            querySnapshoti.forEach((docs) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(docs.id, " => ", docs.data());
              tempudetail.push({id:docs.id,bfname:docs.data().bfname,bfprice:docs.data().bfprice, bfquantity:docs.data().bfquantity});
              });
              //setProductsr([...tempudetail]);
            temp.push({id:doc.id,address:doc.data().address,email:doc.data().email, state:doc.data().state,productsr:tempudetail});
            setProducts((current)=>[...current,{id:doc.id,address:doc.data().address,email:doc.data().email, cost:doc.data().cost,state:doc.data().state,productsr:tempudetail} ])
          });
          console.log("未完成id:"+tempu);
          console.log(temp);
          //setProducts([...temp]);
          setIsLoading(false);
          setstring([...tempu]);
        }
        readData();
      },[db]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const edit = async function(id){
    try{
      console.log(id);
      await updateDoc(doc(db,"order",id),{
        state:1
      });
      Swal.fire({
        icon: 'success',
        title: '完成訂單，請重整頁面'
      })
    }
  
    catch(e){
      console.log(e);
    }
    
  }
  const edit2 = async function(id){
    try{
      console.log(id);
      await updateDoc(doc(db,"order",id),{
        state:2
      });
      Swal.fire({
        icon: 'success',
        title: '此訂單已取消，請重整頁面'
      })
    }
  
    catch(e){
      console.log(e);
    }
    
  }
  const[productid,setProductid]=useState(0);
  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Imfor=function(){
    return(
      <Box>
        {products.map((product, index) => 
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={index}
        >
          <Typography>{product.email}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <strong>地址：{product.address}</strong><br/>
          <strong>總金額：{product.cost}</strong>
          <Typography>
          {product.productsr.map((buyy, index) => 
            <ListItemText primary={"品項："+buyy.bfname} secondary={"份數："+buyy.bfquantity}></ListItemText>
           
          )}
          <Stack direction="row" spacing={1}>
          <Button variant="contained" color="success" edge="end" onClick={()=>edit(product.id)}>完成訂單</Button>
          <Button variant="contained" color="error" edge="end" onClick={()=>edit2(product.id)}>取消訂單</Button>
          </Stack>
          </Typography>
          
        </AccordionDetails>
      </Accordion>
      
        )}
      </Box>
    );
  }
  

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
        <List aria-label="employee list"></List>
        {!isLoading ?
          <Imfor/>
           :
          <CircularProgress />
        }
    </Box>
  );
}