import * as React from 'react';
import Input from "../components/Input";

export default class Login extends React.Component {
    render() {
        return(
            <form action="">
                <Input type="email" name="email" value="" placeholder="Введите email" />
                <Input type="password" name="password" value="" placeholder="Введите пароль" />
                <button>Войти</button>
            </form>
        );
    }
}