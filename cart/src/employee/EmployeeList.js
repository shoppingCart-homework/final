import React, {useState,useEffect,useContext} from 'react';
import { Box, List, ListItem, ListItemText} from '@mui/material';
import AppMenu from '../ui/AppMenu';
import {AuthContext, STATUS} from '../account/AuthContext';
import {IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export default function EmployeeList() {
  const authContext = useContext(AuthContext);

  const [employees] = useState([
    {id:"0", name:"A", department:"100",num:"1"},
    {id:"1", name:"B", department:"30",num:"1"},
    {id:"2", name:"C", department:"20",num:"1"},
    {id:"3", name:"D", department:"60",num:"1"},
    {id:"4", name:"E", department:"1000",num:"1"}
   ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };

  

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

        <ListItemText primary={employee.name} secondary={"NT$"+employee.department+"　　數量："+employee.num}></ListItemText>

        {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
          <IconButton edge="end" aria-label="edit">
          <EditIcon />
          </IconButton> 
          }
          {(authContext.status===STATUS.toSignIn)?
          <Box></Box>:
          <IconButton edge="end" aria-label="delete">
          <DeleteOutlinedIcon />
          </IconButton> 
          }
      </ListItem>)}


    </List>
    <Button variant="contained" endIcon={<SendIcon />}>
        送出訂單
      </Button>
    

    </Box>



  );

}