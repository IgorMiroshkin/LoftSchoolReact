import React from 'react';

export const SignUpForm = ({setPage}) => {
  const onSubmit = e => {
      e.preventDefault();
      setPage('profile')
  };

  return(
      <form onSubmit={onSubmit}>
          <div>
              <input type="email" name="email" placeholder="Email"/>
          </div>
          <div>
              <input type="text" name="name" placeholder="Name"/>
          </div>
          <div>
              <input type="text" name="surname" placeholder="Surname"/>
          </div>
          <div>
              <input type="password" name="password" placeholder="Password"/>
          </div>
          <button>SignUp</button>
      </form>
  );
};