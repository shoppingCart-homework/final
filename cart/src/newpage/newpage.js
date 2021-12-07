import React, {useState} from 'react';
import { Box, List, ListItem, ListItemText} from '@mui/material';
import AppMenu from '../ui/AppMenu';

export default function Newpage() {
   
  const [employees] = useState([

    {id:"0", name:"哈哈", department:"100"}

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
    <List subheader="　訂單" aria-label="employee list">
    {employees.map((employee, index) => 
      <ListItem divider key={index} onClick={()=>handleListItemClick(index)} selected={selectedIndex === index}>
        <ListItemText primary={employee.name} secondary={"NT$"+employee.department}></ListItemText>
      </ListItem>)}
    </List>
    </Box>



  );

}