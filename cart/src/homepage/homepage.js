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
import { NoticeBar, Space } from 'antd-mobile';
import { height } from '@mui/system';
import { SmileOutline,BellOutline} from 'antd-mobile-icons';

export default function Homepage() {
  
  

    return (
      
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <AppMenu/>
        <NoticeBar icon={<BellOutline />} content="注意！新產品：微笑薯餅即將上市！感謝你的注意！本販賣店商品皆由魔貨物車輛運送，一次可以載兩隻！" color='info' />
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"></link>
    <img style={{ height: 360 }} src={Background} />
    

    </Box>
    


  );

}