import React from 'react';
import '../App.css';
import {Route} from 'react-router-dom';
import Dialogs from './Dialogs';
import Profile from "./Profile";
import {AddPostType, changePostValueType, rootStateType} from '../redux/state';

type ContentType = {
    state: rootStateType
    addPost:AddPostType
    changePostValue:changePostValueType
}

const ContentBody = (props: ContentType) => {
    debugger
    return (

        <div className="ContentBody">
            {/*  <Route path='/dialogs' render={() => (<Dialogs />)} />*/}
            <Route path='/profile' render={() =>
                (<Profile profilePage={props.state.profilePage}
                          changePostValue={props.changePostValue}
                          addPost={props.addPost}/>)}/>
        </div>
    );
}

export default ContentBody;
