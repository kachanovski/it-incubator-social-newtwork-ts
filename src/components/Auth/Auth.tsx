import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'

const Auth = (props: any) => {
    debugger
    return (
        <div>
            {props.isAuth ? props.login :
                <NavLink to='/login'> Login </NavLink>}
        </div>
    );
}

export default Auth;
