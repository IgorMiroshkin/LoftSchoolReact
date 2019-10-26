import React from 'react';
import { LoginForm } from './Login';

export const Login = ({ setPage }) => {
  return(
      <>
          <h1>Login</h1>
          <LoginForm setPage={setPage}/>
      </>
  );  
};