import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <h3>Dialogs</h3>
            <div className={s.dialog}><NavLink className={s.dialogItem} to='/dialogs/1'>Alex</NavLink></div>
            <div className={s.dialog}><NavLink className={s.dialogItem} to='/dialogs/2'>Maks</NavLink></div>
            <div className={s.dialog}><NavLink className={s.dialogItem} to='/dialogs/3'>Vadik</NavLink></div>
            <div className={s.dialog}><NavLink className={s.dialogItem} to='/dialogs/4'>Anya</NavLink></div>

        </div>

    );
}

export default Dialogs;
