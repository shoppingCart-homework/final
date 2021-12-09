import React, {useState} from 'react';



//import Button from '@material-ui/core/Button';

//import FormControl from '@material-ui/core/FormControl';

//import TextField from '@material-ui/core/TextField';

import {Button,FormControl,TextField} from '@mui/material';




import axios from 'axios';







export default function CustomerAddEdit(props) {



  const classes = props.classes; //useStyles in CustomerList to prevent conflict

  const [id] = useState(props.id);

  const [name, setName] = useState(props.customer.name);

  const [address, setAddress] = useState(props.customer.address);

  const [weight, setWeight] = useState(props.customer.weight);

  



  function send(){

    let auth = {auth: {

      username: 'manager',

      password: 'password'

    }}

    if (id === "") {

      //add a new customer

      const customer={

        name:name,

        address:address,

        weight:weight

      };

      console.log(customer);

      axios.post("/customer/", customer,auth)

      .then(res => {

        console.log(res);

        console.log(res.data);

        props.hide();

      });

    }

    else {

      //update a customer

      const customer={

        id:id,

        name:name,

        address:address,

        weight:weight

      };

      console.log(customer);

      axios.put("/customer/", customer,auth)

      .then(res => {

        console.log(res);

        console.log(res.data);

        props.hide();

      });



    }

    

  }

  return (

    <form className={classes.root} noValidate autoComplete="off">

      <FormControl className={classes.formControl} >

        <TextField id="name" label="姓名" value={name} onChange={e => setName(e.target.value)}/>

      </FormControl>

      <FormControl className={classes.formControl}>

        <TextField id="address" label="住址" value={address} onChange={e => setAddress(e.target.value)}/>

      </FormControl>

      <FormControl className={classes.formControl}>

        <TextField id="weight" label="體重" value={weight} onChange={e => setWeight(e.target.value)}/>

      </FormControl>

      <FormControl className={classes.formControl}>

      <Button className={classes.button} onClick={() => send()}>

      確定

      </Button>

      </FormControl>

  </form>

  );

}