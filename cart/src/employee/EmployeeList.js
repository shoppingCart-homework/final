import React, {useState} from 'react';
import { Box, List, ListItem, ListItemText} from '@mui/material';
import AppMenu from '../ui/AppMenu';

export default function EmployeeList() {

  const [employees] = useState([
    {id:"0", name:"A", department:"100"},
    {id:"1", name:"B", department:"30"},
    {id:"2", name:"C", department:"20"},
    {id:"3", name:"D", department:"60"},
    {id:"4", name:"E", department:"1000"}
   ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {  
    setSelectedIndex(index);
  };

  

    return (
    <Box sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'background.paper',
        color: 'black',
        textAlign: 'left'
    }} >
    <AppMenu/>
    <List subheader="　購物車" aria-label="employee list">
    {employees.map((employee, index) => 
      <ListItem divider key={index} onClick={()=>handleListItemClick(index)} selected={selectedIndex === index}>

        <ListItemText primary={employee.name} secondary={"NT$"+employee.department}></ListItemText>

      </ListItem>)}


    </List>

    

    </Box>



  );

}