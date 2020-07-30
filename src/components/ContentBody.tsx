import React from 'react';
import '../App.css';
import {Route} from 'react-router-dom';
import Profile from "./Profile";
import {
    ActionsType, AddPostType, changePostValueType, rootStateType
} from '../redux/state';

type ContentType = {
    state: rootStateType
    addPost: AddPostType
    changePostValue: changePostValueType
    dispatch: (action: ActionsType) => void
}

const ContentBody = (props: ContentType) => {
    debugger
    return (

        <div className="ContentBody">
            {/*  <Route path='/dialogs' render={() => (<Dialogs />)} />*/}
            <Route path='/profile' render={() =>
                (<Profile profilePage={props.state.profilePage}
                          dispatch={props.dispatch}
                          changePostValue={props.changePostValue}
                          addPost={props.addPost}/>)}/>
        </div>
    );
}

export default ContentBody;
