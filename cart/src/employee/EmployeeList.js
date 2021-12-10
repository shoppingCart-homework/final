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
export default function EmployeeList() {
  const authContext = useContext(AuthContext);

  const [employees] = useState([
    {id:"0", name:"A", department:"100",num:"1"},
    {id:"1", name:"B", department:"30",num:"1"},
    {id:"2", name:"C", department:"20",num:"888"},
    {id:"3", name:"D", department:"60",num:"100"},
    {id:"4", name:"E", department:"1000",num:"1"}
   ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };
  var Sum=0;
  
  

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

        <ListItemText primary={employee.name} secondary={"NT$"+employee.department}></ListItemText>
        
        <button >-</button>
        <input id="num" value={employee.num} size="1"></input>
        <button >+</button>
        <IconButton edge="end">
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