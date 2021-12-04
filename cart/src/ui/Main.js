import React, {useState,useContext} from 'react';
import AppMenu from './AppMenu';
import SignUp from '../account/SignUp';
import SignIn from '../account/SignIn';
import SignOut from '../account/SignOut';
import {AuthContext, STATUS} from '../account/AuthContext';


export default function Main() {
  const authContext = useContext(AuthContext);

  return (
    <div>
      <AppMenu/>
      {authContext.status===STATUS.toSignUp?
      <SignUp/>
      :authContext.status===STATUS.toSignIn? 
      <SignIn/> //已登入
      :
      <SignOut/>
      }
      
    </div>
/*
status及setStatus在provider會被覆蓋
status為toSignIn 已註冊，將要登入
status為toSignOut 已登入，將要登出  
status為toSignUp 未註冊，將要註冊  

      {status==="signUp"?
      <SignUp setStatus={setStatus}/>
      :status==="signIn"?
      <SignIn setStatus={setStatus}/>
      :
      <SignOut setStatus={setStatus}/>
      }
*/


  )



}