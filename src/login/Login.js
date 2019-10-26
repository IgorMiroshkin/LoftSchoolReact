import React from 'react';

export const LoginForm = ({ setPage }) => {
    const onSubmit = e => {
        e.preventDefault();
        setPage('profile');
    };


    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" name="email" placeholder="Email"/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            <button>Login</button>
        </form>
    );
};