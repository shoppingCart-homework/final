import React, {useState} from 'react';

import { Box, List, ListItem, ListItemText,Toolbar,Tab, Button, Tabs} from '@mui/material';
import {NavLink} from 'react-router-dom';

import AppMenu from '../ui/AppMenu';

export default function EmployeeList() {

const activeStyle = { backgroundColor:"deepskyblue", color:"black" };

  const [employees] = useState([

    {id:"0", name:"apple", price:"50"},

    {id:"1", name:"banana", price:"70"},

    {id:"2", name:"chocolate", price:"35"},

    {id:"3", name:"cookie", price:"90"},

    {id:"4", name:"cola", price:"25"}

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

<Tabs >
<Tab label="Employee"  />
          <Tab label="Product"  />
          <Tab label="food"  />
      </Tabs>

    <List subheader="Employee list" aria-label="employee list">

    {employees.map((employee, index) => 

      <ListItem divider key={index} onClick={()=>handleListItemClick(index)} selected={selectedIndex === index}>

        <ListItemText primary={employee.name} secondary={"$:"+employee.price}></ListItemText>



      </ListItem>)}



    </List>

    

    </Box>



  );

}