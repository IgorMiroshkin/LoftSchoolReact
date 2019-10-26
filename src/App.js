import React from 'react';
import { Profile } from './profile';
import { Map } from './map';
import { Login } from './login';
import { SignUp } from './signUp';
import { Header } from './shared/Header';

const pages = {
    profile: () => <Profile />,
    map: () => <Map/>,
    login: setPage => <Login setPage={setPage}/>,
    signup: setPage => <SignUp setPage={setPage}/>
};

function App() {
    const [page, setPage] = React.useState("login");

    return (
        <>
            <Header setPage={setPage}/>
            {pages[page](setPage)}
        </>
    )
}

export default App;