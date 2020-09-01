import React from 'react';
import {NavLink} from 'react-router-dom';
import {AuthType} from "../../types/types";


const Auth = (props: AuthType) => {

    return (
        <div>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to='/login'> Login </NavLink>}
        </div>
    );
}

export default Auth;
