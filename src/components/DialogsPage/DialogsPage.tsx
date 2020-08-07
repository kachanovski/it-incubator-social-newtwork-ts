import React, {ChangeEvent} from 'react';
import s from './DialogsPage.module.css';
import {PropsFromRedux} from "./DialogsContainer";
import Dialogs from './Dialogs/Dialogs';

type DialogsProps = PropsFromRedux

const DialogsPage = (props: DialogsProps) => {

    let addMessage = () => {
        props.addMessage(props.dialogPage.newMessage)
    }
    let changeMessageTextValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMessageTextValue(e.currentTarget.value)
    }

    let messages = props.dialogPage.messages.map(m =><div> <span>{m.date}</span> <div className={s.messageBox} key={m.id}>{m.message}</div> </div> )


    return (
        <div className={s.dialogPage}>
            <Dialogs/>

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

export default DialogsPage;
