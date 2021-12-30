import React, {useState,useEffect} from 'react';
import { Box, List, ListItem, ListItemText} from '@mui/material';
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

export default function Newpage() {
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const [products,setProducts]=useState([]);
  const [productsrrr,setProductsrrr]=useState([]);
  const [strr,setstrr]=useState([]);
  const [productsr,setProductsr]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [DocId, setDocId] = useState(0);
      useEffect(()=>{
        async function readData() {
          
          setIsLoading(true);
          var citiesRef = collection(db, "order");
          const q = await getDocs(query(citiesRef, where("state", "==", 0)));
    
          const temp = [];
         //q.foreach(doc) => ........
          q.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          
            console.log(doc.id, " => ", doc.data());
            temp.push({id:doc.id,address:doc.data().address,email:doc.data().email, state:doc.data().state});
          });
          console.log(temp);
          setProducts([...temp]);
          setIsLoading(false);
        }
        readData();
      },[db]);
      useEffect(()=>{

        async function readData() {
          
          setIsLoading(true);
          
          //var string='order/5/content';
          var string='order';
          const citiesRef = collection(db, string);
          
          const querySnapshot = await getDocs(citiesRef);
          const temp = [];
          const str=[];
          //q.foreach(doc) => ........
          querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            temp.push({id:doc.id});
            var stringr='order/'+doc.id+'/content';
            str.push(stringr);
            });
          //console.log("哈哈:"+str);
          console.log(temp);
          setstrr([...str]);
          setProductsr([...temp]);
          setIsLoading(false);
          let e=str.length;
          const tempi = [];
          const count=[];
          const counti=[];
          for (var i=0;i<e;i++){
            //console.log("我是:"+str[i]);
            var stringi=str[i];
            const citiesRefi = collection(db, stringi);
            const querySnapshoti = await getDocs(citiesRefi);
            //q.foreach(doc) => ........
            querySnapshoti.forEach((docs) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(docs.id, " => ", docs.data());
            tempi.push({id:docs.id,bfname:docs.data().bfname,bfprice:docs.data().bfprice, bfquantity:docs.data().bfquantity});
            });
            
            count.push(tempi.length);
            console.log("數量"+count);
          }
          for (var j=0;j<count.length-1;j++){
            counti.push(count[j+1]-count[j]);
          }
          console.log("長度:"+counti);
          setProductsrrr([...tempi]);
        }
        
        readData();
      },[db]);
      
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  for (var i=1;i<=10;i++){
    
  }
  

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
    <List aria-label="employee list"></List>
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
          <strong>地址：{product.address}</strong>
          <Typography>
          {productsrrr.map((buyy, index) => 
            <ListItemText primary={"品項："+buyy.bfname} secondary={"份數："+buyy.bfquantity}></ListItemText>
           
          )}
          
          <Button variant="contained" color="success" edge="end">完成訂單</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
        )}
    
    


    </Box>
    


  );

}