import React, {useState} from 'react';
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

export default function Newpage() {
   
  const [employees] = useState([

    {id:"0", name:"訂購人@gmail.com", department:"木星"},
    {id:"1", name:"kurosaki@gmail.com", department:"超量次元"}
   ]);
  const [buy]=useState([
    {stuff:"微笑世界",quantity:"5"},
    {stuff:"微笑藥水",quantity:"10"},
    {stuff:"微笑宇宙",quantity:"15"}
  ]);
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
  
  

    return (
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
    <List aria-label="employee list"></List>
    {employees.map((employee, index) => 
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={index}
        >
          <Typography>{employee.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <strong>地址：{employee.department}</strong>
          <Typography>
          {buy.map((buyy, index) => 
            <ListItemText primary={"品項："+buyy.stuff} secondary={"份數："+buyy.quantity}></ListItemText>
          )}
          
          <Button variant="contained" color="success" edge="end">完成訂單</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )}
    


    </Box>
    


  );

}