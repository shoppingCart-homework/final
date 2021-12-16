import React, {useState,useEffect,useContext} from 'react';
import { Box, List, ListItem, ListItemText} from '@mui/material';
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

export default function EmployeeList() {
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const authContext = useContext(AuthContext);

  /*const [employees] = useState([
    {id:"0", bfname:"A", department:"100",num:"1"},
    {id:"1", bfname:"B", department:"30",num:"1"},
    {id:"2", bfname:"C", department:"20",num:"888"},
    {id:"3", bfname:"D", department:"60",num:"100"},
    {id:"4", bfname:"E", department:"1000",num:"1"}
   ]);*/
  //const [selectedIndex, setSelectedIndex] = useState(0);

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
            console.log(docId);

            //抓ctcontent
            docRef = doc(db,"cart",docId );
            const querySnapshot = await getDocs(collection(docRef,"ctcontent"));

            const temp = [];
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            temp.push({id:doc.id,
              bfname:doc.data().bfname, 
              bfprice:doc.data().bfprice,
              bfquantity:doc.data().bfquantity});
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
        
        <button >-</button>
        <input id="num" value={1} size="1"></input>
        <button >+</button>
        <IconButton edge="end" onClick={()=>deleteData(employee.id)}>
        <DeleteIcon/>
        </IconButton> 
      
      </ListItem>)}
      <ListItem>
      <ListItemText>總計：</ListItemText>
      <Button variant="contained" endIcon={<SendIcon />} >
        送出訂單
      </Button>
      </ListItem>

    </List>
    
    

    </Box>



  );

}