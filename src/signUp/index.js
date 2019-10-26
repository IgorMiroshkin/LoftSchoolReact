import React from 'react';
import { SignUpForm } from './SignUpForm';

export const SignUp = ({ setPage }) => {
  return(
      <>
          <h1>SignUp</h1>
          <SignUpForm setPage={setPage}/>
      </>
  );
};