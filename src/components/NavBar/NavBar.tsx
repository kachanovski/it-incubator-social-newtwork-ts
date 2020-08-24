import React from 'react';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'
import AuthContainer from "../Auth/AuthContainer";

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <h2>
                Social Network<br/>
            </h2>
            <h4>
                by<br/>
                Kachanovski Aliaksander
            </h4>


            <div>
                <NavLink className={s.navTab} activeClassName={s.active} to='/dialogs'>Dialogs</NavLink>
            </div>
            <div>
                <NavLink className={s.navTab} activeClassName={s.active} to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink className={s.navTab} activeClassName={s.active} to='/users'>Users</NavLink>
            </div>

            <AuthContainer />
        </div>
    );
}

export default NavBar;
