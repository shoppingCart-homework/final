import React from 'react';

import {Box, Input} from '@mui/material';

import axios from 'axios';



export default function ImageUpload() {

  

  const handleUpload = async function(e){

    console.log(e.target.files[0]);

    try {

        const formData = new FormData()

        formData.append(

          'file',e.target.files[0]

        )

        const result = await axios.post("/file",formData);

        console.log(result);

    }

    catch(error){

        console.log(error);

    }



  }

  return (

    <Box>

      <Input type="file" accept="image/x-png,image/jpeg" onChange={handleUpload}/>

    </Box>

  )



}