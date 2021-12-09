import React, {useState} from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ImageUpload from './ui/ImageUpload'
import ImageUpload2 from './ui/ImageUpload2'

import ProductList from './product/ProductList';

import EmployeeList from './employee/EmployeeList';

import CustomerList from './customer/CustomerList';

import Main from './ui/Main';

import {AuthContext, STATUS} from './account/AuthContext';



export default function AppRouter(){

  const [status, setStatus] = useState(STATUS.toSignIn);

  return(

    <AuthContext.Provider value={{status, setStatus}}>

      <Router>

        <Routes>

          <Route path="/" element={<Main/>}/>

          <Route path="/product" element={<ProductList/>}/>

          <Route path="/employee" element={<EmployeeList/>}/>

          <Route path="/ans" element={<CustomerList/>}/>

          <Route path="/upload" element={<ImageUpload/>}/>

          <Route path="/upload2" element={<ImageUpload2/>}/>

        </Routes>

      </Router>

    </AuthContext.Provider>

  );

}