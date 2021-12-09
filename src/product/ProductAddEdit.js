import React, {useState} from 'react';

import { Button, Dialog, TextField  } from '@mui/material';

import axios from 'axios';

export default function ProductAddEdit(props) {

  const [customer, setCustomer] = useState({name:"", weight:0});

  

  const handleClick = function(e){

    setCustomer({...customer,[e.target.name]:e.target.value})

  }



  const update = async function(){

    try{

      await axios.post("/customer",customer);

    }

    catch(e){

      console.log(e);

    }

    props.close();

  }



  return (

    <Dialog open={props.open}>

      <TextField label ="名稱" name ="name" variant="outlined" value={customer.name} onChange={handleClick}/>

      <TextField label ="體重" type="number" name ="weight" variant="outlined" value={customer.weight} onChange={handleClick}/>



    <Button variant="contained" color="primary" onClick={update}>新增</Button>

    <Button variant="contained" color="secondary" onClick={()=>props.close()}>取消</Button>

    </Dialog>

  );

}