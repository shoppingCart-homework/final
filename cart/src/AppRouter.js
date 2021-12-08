import React,{useState} from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './product/ProductList';
import EmployeeList from './employee/EmployeeList';
import Newpage from './newpage/newpage';
import Main from './ui/Main';
import {AuthContext, STATUS} from './account/AuthContext';

export default function AppRouter(){
    const [status, setStatus] = useState(STATUS.toSignIn);
return (
    <AuthContext.Provider value={{status, setStatus}}>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product" element={<ProductList/>}/>
        <Route path="/employee" element={<EmployeeList/>}/>
        <Route path="/newpage" element={<Newpage/>}/>
      </Routes>
    </Router>
  </AuthContext.Provider>

);

}