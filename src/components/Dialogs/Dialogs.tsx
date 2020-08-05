import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {PropsFromRedux} from "./DialogsContainer";

type DialogsProps = PropsFromRedux

const Dialogs = (props: DialogsProps) => {

    let addMessage = () => {
        props.addMessage(props.dialogPage.newMessage)
    }
    let changeMessageTextValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMessageTextValue(e.currentTarget.value)
    }

    let messages = props.dialogPage.messages.map(m => <div key={m.id}>{m.message}</div>)

    return (
        <div className={s.dialogPage}>
         <div className={s.dialogs}>
             <h3>Dialogs</h3>
             <div className={s.dialog}>Lol</div>
             <div className={s.dialog}>123</div>
             <div className={s.dialog}>2</div>
             <div className={s.dialog}>3</div>

         </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div className={s.addMessage}>
            <input type={'text'} value={props.dialogPage.newMessage} onChange={changeMessageTextValue}/>
            <button onClick={addMessage}>add</button>
        </div>
        </div>
    );
}

export default Dialogs;
