import React, {useState, useEffect} from 'react';



import axios from 'axios';



//import Button from '@material-ui/core/Button';

//import Dialog from '@material-ui/core/Dialog';

//import Fab from '@material-ui/core/Fab';

//import Table from '@material-ui/core/Table';

//import TableBody from '@material-ui/core/TableBody';

//import TableCell from '@material-ui/core/TableCell';

//import TableContainer from '@material-ui/core/TableContainer';

//import TableHead from '@material-ui/core/TableHead';

//import TableRow from '@material-ui/core/TableRow';

//import Paper from '@material-ui/core/Paper';

import {Button,Paper,TableRow,TableHead,Dialog,Fab,Table,TableBody,TableCell,TableContainer} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

//import AddIcon from '@material-ui/icons/Add';


//import { makeStyles } from '@mui/styles';

//import useStyles from '../style';
import { styled } from '@mui/material/styles';


import CustomerAddEdit from './CustomerAddEdit';

import AppMenu from '../ui/AppMenu';



const useStyles = styled({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function CustomerList() {

  const classes = useStyles();

  const [customers, setCustomers] = useState([]);

  const [id, setId] = useState(0);

  const [open, setOpen] = useState(false);

  const [deleted, setDeleted] = useState(false);//if record deleted alter this state



  const [customer,setCustomer] = useState();



  useEffect(() => {

    async function fetchData () {

      const result = await axios.get('/customer');

      setCustomers(result.data);

    }

    fetchData();

  },[open, deleted]);

  

  function remove(id){
    let auth = {auth: {

      username: 'manager',

      password: 'password'

    }}

    alert(id);

    axios.delete("/customer/"+id,auth).then(res => {

      console.log(res);

      console.log(res.data);

      setDeleted(currentDeleted=>setDeleted(!currentDeleted));

    });

  }



  function edit(id, index){

    setId(id);

    setOpen(true);

    setCustomer(customers[index]);

  }



  function add(){

    setId("");

    setOpen(true);

    setCustomer({name:"",address:"",weight:0});

  }



  function hide(){

    setOpen(false);

  }

  return (

  

  <TableContainer component={Paper}>

    

    <AppMenu/>
    

    <Table className={classes.table} aria-label="simple table">

      <TableHead>

        <TableRow>

          <TableCell align="left">編號</TableCell>

          <TableCell align="left">姓名</TableCell>

          <TableCell align="left">住址</TableCell>

          <TableCell align="right">體重</TableCell>

          <TableCell align="right"></TableCell>



        </TableRow>

      </TableHead>

      <TableBody>

        {customers.map((customer, index) => (

          <TableRow key={customer.id}>

            <TableCell component="th" scope="row">

            {customer.id}

            </TableCell>

            <TableCell align="left">{customer.name}</TableCell>

            <TableCell align="left">{customer.address}</TableCell>

            <TableCell align="right">{customer.weight}</TableCell>

            <TableCell align="right">

              <Button className={classes.button} onClick={()=>edit(customer.id, index)}>更新</Button>

              <Button className={classes.button} onClick={()=>remove(customer.id)}>刪除</Button></TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>

    <Fab color="primary" aria-label="add" onClick={add}>

        <AddIcon />

    </Fab>    

    <Dialog onClose={()=>setOpen(false)} aria-labelledby="simple-dialog-title" open={open}>

    <CustomerAddEdit classes={classes} hide={hide} id={id} customer={customer}/>

    </Dialog>
    
  </TableContainer>
 
   

  );

}