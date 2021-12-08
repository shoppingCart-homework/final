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

    {id:"0", name:"訂購人姓名", department:"100"},
    {id:"1", name:"訂購人姓名2", department:"400"}
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
          <Typography>
          <ListItemText primary={"品項：微笑世界"} secondary={"份數："+employee.name}></ListItemText>
          <ListItemText primary={"品項：微笑藥水"} secondary={"份數：10"}></ListItemText>
          <Button variant="contained" color="success" edge="end">完成訂單</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )}
    


    </Box>
    


  );

}