import * as React from 'react';
import Input from "../components/Input";

export default class SignUp extends React.Component {
    render() {
        return(
            <form>
                <Input type="text" name="name" value="" placeholder="Введите имя" />
                <Input type="email" name="email" value="" placeholder="Введите email" />
                <Input type="password" name="password" value="" placeholder="Введите пароль" />
                <button>Зарегистрироваться</button>
            </form>
        );
    }
}
