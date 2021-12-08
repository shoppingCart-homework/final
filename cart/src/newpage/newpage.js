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

export default function Newpage() {
   
  const [employees] = useState([

    {id:"0", name:"笑死", department:"100"}

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
    <List subheader="　訂單" aria-label="employee list">
    {employees.map((employee, index) => 
      <ListItem divider key={index} onClick={()=>handleListItemClick(index)} selected={selectedIndex === index}>
        <ListItemText primary={employee.name} secondary={"NT$"+employee.department}>
        </ListItemText>
        <Stack spacing={0.5} direction="row">
        <Button variant="contained" color="primary" edge="end" onClick={handleClickOpen}>查看訂單</Button>
        <Button variant="contained" color="success" edge="end">完成訂單</Button>
      </Stack>
      </ListItem>
      )}
    </List>

    
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{"訂單詳情"}</DialogTitle>
        <DialogContent>
          <ListItemText primary={"品項：微笑世界"} secondary={"份數：5"}></ListItemText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>關閉</Button>
        </DialogActions>
      </Dialog>


    </Box>
    


  );

}