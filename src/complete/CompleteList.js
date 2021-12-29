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
import { initializeApp } from "firebase/app";
import {collection ,getDocs,doc,setDoc,addDoc,
  onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit,getDoc} from '@firebase/firestore';
import {config} from '../settings/firebaseConfig';
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp(config);
const db = getFirestore();

export default function Newpage() {
   
  const [orders,setOrders]=useState([]);//這邊read訂單資料
  useEffect(()=>{

    async function readData() {
      //var citiesRef = collection(db, "product");
      //const q = await getDocs(query(citiesRef, where("price", ">=", 10000)));
      const q = query(collection(db,"order"),where("state", "==", 1));
      setIsLoading(true);
      const querySnapshot = await getDocs(q);

      const temp = [];
     //q.foreach(doc) => ........
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        temp.push({id:doc.id,address:doc.data().address, cost:doc.data().cost,email:doc.data().email,state:doc.data().state});
      });

      console.log(temp);
      setOrders([...temp]);
      setIsLoading(false);
    }

    readData();

  },[db]);

 /* const [employees] = useState([

    {id:"0", name:"akabareiji@yahoo.com.tw", department:"天王星"},
    {id:"1", name:"123@gmail.com", department:"海王星"}
   ]);
  const [buy]=useState([
    {stuff:"微笑世界",quantity:"5"},
    {stuff:"微笑藥水",quantity:"10"},
    {stuff:"微笑宇宙",quantity:"15"}
  ]);*/
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
  
  const [isLoading, setIsLoading] = useState(false);
  

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
    <List aria-label="employee list"></List>
    {orders.map((order, index) => 
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={index}
        >
          <Typography>{order.email}</Typography> 
        </AccordionSummary>
        
        <AccordionDetails>
        <strong>地址：{order.address}</strong>
        <strong>   編號：{order.id}</strong>
         <Typography>
       
          
          <Button variant="contained" color="success" edge="end" disabled>已完成</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )}
    


    </Box>
    


  );

}