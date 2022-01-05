import {React,useEffect} from 'react';
import {Tabs, Tab, Box } from '@mui/material';
import {NavLink} from 'react-router-dom';
import {AuthContext, STATUS} from '../account/AuthContext';
import { collection ,getDocs,doc,setDoc,addDoc, onSnapshot,query, orderBy,where,deleteDoc,updateDoc,limit,getDoc} from '@firebase/firestore';
import {useState,useContext} from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CookieIcon from '@mui/icons-material/Cookie';
import CheckIcon from '@mui/icons-material/Check';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Home from '@mui/icons-material/Home';
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {config} from '../settings/firebaseConfig';
import { getFirestore } from "firebase/firestore";
import HistoryIcon from '@mui/icons-material/History';
export default function AppMenu() {
  const [isLoading, setIsLoading] = useState(false);
  const [userss,setUsersss]=useState([]);
  const firebaseApp = initializeApp(config);
  const db = getFirestore();
  const authContext = useContext(AuthContext);
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
    // 使用者已登入，可以取得資料
    var email = user.email;
    var uid = user.uid;
    console.log("loginemail:"+email);
  } else {
    console.log("沒有登入");
    // 使用者未登入
  }
  useEffect(()=>{

    async function readData() {
      //var citiesRef = collection(db, "product");
      //const q = await getDocs(query(citiesRef, where("price", ">=", 10000)));
      setIsLoading(true);
      var citiesRef = collection(db, "user");
      const q = await getDocs(query(citiesRef, where("useremail", "==", user.email)));

      const tempU = [];
     //q.foreach(doc) => ........
      q.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        tempU.push({useremail:doc.data().useremail, userauth:doc.data().userauth,username:doc.data().username});
      });

      console.log(tempU);
      setUsersss([...tempU]);
      setIsLoading(false);
    }

    readData();

  },[db]);
  return (
    
    <Box sx={{ width: 360 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs 
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="icon position tabs example"
    >   
        <Tab component={NavLink} to='/homepage' label="HOME"  color="inherit" icon={<HomeIcon/>} iconPosition="start"/>
        
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
        <Tab component={NavLink} to='/product' label="MENU"  color="inherit" icon={<MenuIcon/>} iconPosition="start"/>
        }
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/employee'  label="cart" color="inherit" icon={<ShoppingCartIcon/>} iconPosition="start"/>
        }
        {userss.map((usersa) => 
          <Box >
          {(usersa.userauth!="1")?
          <Box></Box>:
          <Box>
            {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/newpage' label="Order"  color="inherit" icon={<CookieIcon/>} iconPosition="start"/>
        }
          </Box>
          }
          </Box>
          )}
        {userss.map((usersa) => 
          <Box >
          {(usersa.userauth!="1")?
          <Box></Box>:
          <Box>
            {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
          <Tab component={NavLink}  to='/complete' label="Completed"  color="inherit" icon={<CheckIcon/>} iconPosition="start"/>
        }
          </Box>
          }
          </Box>
          )}
        {(authContext.status!=STATUS.toSignOut)?
          <Box></Box>:
        <Tab component={NavLink} to='/userorder' label="History"  color="inherit" icon={<HistoryIcon/>} iconPosition="start"/>
        }
        {authContext.status===STATUS.toSignOut?
        <Tab component={NavLink}  to='/' label="logout"  color="inherit" icon={<SentimentVeryDissatisfiedIcon/>} iconPosition="start"/>
        :
        <Tab component={NavLink}  to='/' label="login"  color="inherit" icon={<SentimentVerySatisfiedIcon/>} iconPosition="start"/>
      }
      
    </Tabs>
    </Box>
    </Box>

  )

}

/*
    <div>
      <AppMenu/>
      {authContext.status===STATUS.toSignOut?
      <Tab component={NavLink}  to='/' label="logout"  color="inherit"/>
      :
      <Tab component={NavLink}  to='/' label="login"  color="inherit"/>
      }
      
    </div>
status及setStatus在provider會被覆蓋
status為toSignIn 已註冊，將要登入
status為toSignOut 已登入，將要登出  
status為toSignUp 未註冊，將要註冊  
*/