import React, {useState,useEffect} from 'react';
import { Box, List, ListItem, ListItemText,CircularProgress} from '@mui/material';
import AppMenu from '../ui/AppMenu';
import { getAuth, signOut } from "firebase/auth";
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
import Alert from '@mui/material/Alert';
import { Tag } from 'antd-mobile';
import { Empty } from 'antd-mobile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
export default function Newpage() {
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
    var email = user.email;
    var uid = user.uid;
    console.log(email, uid);
  } 
  const [products,setProducts]=useState([]);
  const [string,setstring]=useState([]);
  const [productsr,setProductsr]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
      useEffect(()=>{
        async function readData() {
          setIsLoading(true);
          var citiesRef = collection(db, "order");
          const q = await getDocs(query(citiesRef, where("email", "==", email)));
          //temp??????????????????user
          const temp = [];
          //tempu??????????????????id
          const tempu=[];
         //q.foreach(doc) => ........
          q.forEach(async (doc) => {
            //?????????email???????????????
            //console.log(doc.id, " => ", doc.data());
            tempu.push("order/"+doc.id+"/content");
            //console.log("order/"+doc.id+"/content");
            let strr="order/"+doc.id+"/content";
            const citiesRefi = collection(db, strr);
            const querySnapshoti = await getDocs(citiesRefi);
            const tempudetail=[];
            querySnapshoti.forEach((docs) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(docs.id, " => ", docs.data());
              tempudetail.push({id:docs.id,bfname:docs.data().bfname,bfprice:docs.data().bfprice, bfquantity:docs.data().bfquantity});
              });
              //setProductsr([...tempudetail]);
            temp.push({id:doc.id,address:doc.data().address,email:doc.data().email, state:doc.data().state,productsr:tempudetail});
            setProducts((current)=>[...current,{id:doc.id,address:doc.data().address,email:doc.data().email,cost:doc.data().cost, state:doc.data().state,productsr:tempudetail} ])
          });
          //console.log("?????????id:"+tempu);
          //console.log(temp);
          //setProducts([...temp]);
          setIsLoading(false);
          setstring([...tempu]);
        }
        readData();
      },[db]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
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
  const Erro=function(name){
    if (name=="1"){
      return(
        <Alert severity="success">???????????????</Alert>
      );
    }
    else if(name=="2"){
      return(
        <Alert severity="error">??????????????????</Alert>
      );
    }
    else{
        return(
            <Alert severity="info">???????????????</Alert>
        );
    }
  }
  const Erro2=function(name){
    if (name=="2"){
      return(
        <Tag round color='danger'>
          ?????????
        </Tag>
      );
    }
    else if(name=="0"){
        return(
        <Tag round color='#2db7f5'>
          ?????????
        </Tag>
        );
    }
    else{
        return(
            <Tag round color='#87d068'>
          ?????????
        </Tag>
        );
    }
    
  }
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
          <Typography>{product.email} {Erro2(product.state)}</Typography>
        </AccordionSummary>
        {Erro(product.state)}
        <AccordionDetails>
          <strong>?????????{product.address}</strong><br/>
          <strong>????????????{product.cost}</strong>
          <Typography>
          {product.productsr.map((buyy, index) => 
            <ListItemText primary={"?????????"+buyy.bfname} secondary={"?????????"+buyy.bfquantity}></ListItemText>
           
          )}
          
          
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        )}
      </Box>
    );
  }
  const Emp=function(){
    if (products==false){
      return(
        <Empty
          style={{ padding: '64px 0' }}
          image={
            <AddReactionIcon
              style={{
                color: 'var(--adm-color-light)',
                fontSize: 48,
              }}
            />
          }
          description='???????????????????????????????????????'
        />
      );
    }
    else{
      return(
        <List aria-label="employee list">
        {!isLoading ?
          <Imfor/>
           :
          <CircularProgress />
        }
        </List>
      );
    }
  }

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
        <Emp/>
    </Box>
  );
}