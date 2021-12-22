import React, {useState,useEffect,useContext} from 'react';
import { Box, List, ListItem,Dialog,Input, ListItemText} from '@mui/material';
import AppMenu from '../ui/AppMenu';
import {AuthContext, STATUS} from '../account/AuthContext';
import {IconButton} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {config} from '../settings/firebaseConfig';
import { initializeApp } from "firebase/app";
import { getFirestore,collection ,getDocs,doc,setDoc,addDoc,
   onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit,getDoc} from '@firebase/firestore';
import { getAuth} from "firebase/auth";
import Swal from 'sweetalert2';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import FormHelperText from '@mui/material/FormHelperText';

export default function EmployeeList() {
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const authContext = useContext(AuthContext);


  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };
  var Sum=0;
  
  const[selectedIndex,setSelectedIndex]=React.useState(1);

  //試寫

      // 先拿帳號出來
    const auth = getAuth();
    const user = auth.currentUser;
    if(user) {
      // 使用者已登入，可以取得資料
      var email = user.email;
      console.log("email:"+email);
    } else {
      console.log("沒登入");
      // 使用者未登入
    }
      
    const minus = async function(employee){
      console.log(employee.bfquantity);
      console.log(employee.id);
      
      await setDoc(doc(db, "cart", DocId,"ctcontent",employee.id), {
        bfname:employee.bfname,
        bfprice: employee.bfprice,
        bfquantity:parseInt(employee.bfquantity)-1,
        useremail:user.email
      });
      setTotal(parseInt(total)-parseInt(employee.bfprice))

  }

  const plus = async function(employee){
    console.log(employee.bfquantity);
    console.log(employee.id);
    
    await setDoc(doc(db, "cart", DocId,"ctcontent",employee.id), {
      bfname:employee.bfname,
      bfprice: employee.bfprice,
      bfquantity:parseInt(employee.bfquantity)+1,
      useremail:user.email
    });
    setTotal(parseInt(total)+parseInt(employee.bfprice))
}

const send = async function(){
  
            
            
            const auth = getAuth();
            const user = auth.currentUser;
            var acemail = user.email;
            const querySnapshot = await getDocs(collection(db,"order"));
            
            console.log("querySnapshot:"+querySnapshot);
            let docId=0;
            let docRef=0;
        
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                docId = doc.id;
              });
            const cartid = parseInt(docId) +1;
            const carid = cartid.toString();
            await setDoc(doc(db, "order", carid), {
              address:orderAddress,
              state: 0,
              email: acemail,
              cost: total
            });
            //加訂單
            const docRef2 = doc(db,"cart",DocId );
            const querySnapshot2 = await getDocs(collection(docRef2,"ctcontent"));
            
            //const querySnapshot2 = await getDocs(collection(db,"cart",docRef,"ctcontent"));
            querySnapshot2.forEach((doc) => {
              const cartttRef = addDoc(collection(db,"order",carid,"content"),{
                bfname:doc.data().bfname, 
                bfprice:doc.data().bfprice,
                bfquantity:doc.data().bfquantity
                
                });
                console.log(doc.data());
            });
            
            Swal.fire({
              icon: 'success',
              title: '訂單送出成功！',
              
            })

          console.log(DocId)
          await deleteDoc(doc(db,"cart",DocId));
            
            handleClose();

  
          
}

      const [DocId, setDocId] = useState(0);
      const [quantity, setQuantity] = useState(0);

      const [total,setTotal]=useState(0);
      const [total2,setTotal2]=useState(0);

      const [employees,setProducts]=useState([]);
      useEffect(()=>{

        async function readData() {
          //var citiesRef = collection(db, "product");
          //先找有沒有購物車
          console.log(user);
          const q = query(collection(db,"cart"),where("ctstate", "==", 0),where("useremail","==",user.email));
          const snapshot = await getDocs(query(q) );
          console.log("db_line64:"+db);
          //console.log("bfname:",bfname,",email:",user.email);
          if (snapshot.empty==true) {
            console.log("購物車為空");
          }else{
            console.log("db_line69:"+db);
            console.log("useremail:"+user.email);
            let docRef=0;
            let docId=0;
            console.log(snapshot);
            snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              docRef = doc;
              docId = doc.id;
            });
            console.log(docRef);
            console.log(docId);
            setDocId(docId);

            //抓ctcontent
            docRef = doc(db,"cart",docId );
            const querySnapshot = await getDocs(collection(docRef,"ctcontent"));

            const temp = [];
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            temp.push({id:doc.id,
              bfname:doc.data().bfname, 
              bfprice:doc.data().bfprice,
              bfquantity:doc.data().bfquantity,
              });
              
            setTotal((old_total)=>parseInt(old_total)+parseInt(doc.data().bfprice)*parseInt(doc.data().bfquantity))
            
            console.log(total)
            //console.log(total2)
            console.log(doc.data().bfprice)
          });
          
          setProducts([...temp]);


          }
        }
    
        readData();

      },[db]);

      const [deleted,setDeleted]=useState([]);
      

      const deleteData = async function(id){

        try{
          const q = query(collection(db,"cart"),where("ctstate", "==", 0),where("useremail","==",user.email));
          const snapshot = await getDocs(query(q) );
          let docRef = 0;
          let docId=0;
          snapshot.forEach((doc)=>{
            console.log(doc.id, " => ", doc.data());
            docRef = doc;
            docId = doc.id;
          });
          docRef = doc(db,"cart",docId );
          await deleteDoc(doc(docRef, "ctcontent", id));
          //console.log("deleted");
          setDeleted(deleted+1);
          Swal.fire({
            icon: 'success',
            title: '刪除成功，請重新整理頁面'
          })
        }
        catch (error){
          console.log(error);
        }
      
      }

      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [orderAddress, setorderAddress] = useState();
  const handleClick = function(e){
    setorderAddress(e.target.value)
  }

    return (
    <Box sx={{
        width: '100vw',maxWidth: 360,
        height: '100vh',
        backgroundColor: 'background.paper',
        color: 'black',
        textAlign: 'left'
    }} >
    <AppMenu/>
  
    <List aria-label="employee list">
    {employees.map((employee, index) => 
      <ListItem divider key={index} onClick={()=>handleListItemClick(index)} selected={selectedIndex === index}>

        <ListItemText primary={employee.bfname} secondary={"NT$"+employee.bfprice}></ListItemText>
        
        <button onClick={()=>minus(employee)}>-</button>
        <input id="num" value={employee.bfquantity} size="1"></input>
        <button onClick={()=>plus(employee)}>+</button>
        <IconButton edge="end" onClick={()=>deleteData(employee.id)}>
        <DeleteIcon/>
        </IconButton> 
      </ListItem>)}
      <ListItem>
      <ListItemText>總計：</ListItemText>
      
      {total}
      
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}  >
        送出訂單
      </Button>
      </ListItem>

    </List>
    
    <Dialog open={open} onClose={handleClose}>
<DialogTitle id="alert-dialog-title">{"新增產品"}
</DialogTitle>
<DialogContent>
<DialogContentText id="alert-dialog-description">
你的地址:<Input type="text" name="bfname"  onChange={handleClick}/><br/>


<FormHelperText id="outlined-weight-helper-text">請輸入地址</FormHelperText>

</DialogContentText>
</DialogContent>
<DialogActions>
<Button variant="contained" color="primary" onClick={()=>send()}>完成</Button>
<Button onClick={handleClose}>關閉</Button>
</DialogActions>
</Dialog>

    </Box>



  );

}