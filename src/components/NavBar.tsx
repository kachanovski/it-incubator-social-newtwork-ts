import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <div><NavLink to='/dialogs'>Dialogs</NavLink></div>
            <div><NavLink to='/profile'>Profile</NavLink></div>
        </div>
    );
}

export default NavBar;
