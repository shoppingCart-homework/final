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
import Background from './background.jpg';

export default function Homepage() {
  
  
  

    return (
      
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <marquee><i class="fa fa-magnet" aria-hidden="true"></i><i class="fa fa-smile-o" aria-hidden="true"></i><i class="fa fa-thumbs-up" aria-hidden="true"></i><i class="fa fa-bomb" aria-hidden="true"></i><i class="fa fa-bullhorn" aria-hidden="true"></i><i class="fa fa-certificate" aria-hidden="true"></i><a href='https://store.line.me/stickershop/product/8014080/zh-Hant'>⚠注意欸🈹！！！！這是首頁微笑薯餅，他很微笑，現在讓你看看😄🙂😉😜</a></marquee>
    <img style={{ height: 360 }} src={Background} />
    


    </Box>
    


  );

}