import React from 'react';
import s from './DialogsPage.module.css';
import {PropsFromRedux} from "./DialogsContainer";
import Dialogs from './Dialogs/Dialogs';
import {AddMessageFormRedux} from "./DialogsPageForm";

type DialogsProps = PropsFromRedux

const DialogsPage = (props: DialogsProps) => {

    const onSubmit = (value: any) => {
        props.addMessage(value.addNewMessage)
    }

    let messages = props.dialogPage.messages.map(m => <div><span>{m.date}</span>
        <div className={s.messageBox} key={m.id}>{m.message}</div>
    </div>)


    return (
        <div className={s.dialogPage}>
            <Dialogs/>

            <div className={s.messages}>
                {messages}
            </div>
            <div className={s.addMessage}>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

export default DialogsPage;
