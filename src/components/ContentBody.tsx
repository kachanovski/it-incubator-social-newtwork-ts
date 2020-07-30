import React from 'react';
import '../App.css';
import {Route} from 'react-router-dom';
import Profile from "./Profile";
import {ActionsType} from "../redux/redusers/profilePageReduser";
import {rootStateType} from '../types/types';

type ContentType = {
    state: rootStateType
    dispatch: (action: ActionsType) => void
}

const ContentBody = (props: ContentType) => {
    debugger
    return (

        <div className="ContentBody">
            {/*  <Route path='/dialogs' render={() => (<Dialogs />)} />*/}
            <Route path='/profile' render={() =>
                (<Profile profilePage={props.state.profilePage}
                          dispatch={props.dispatch}/>
                )
            }/>
        </div>
    );
}

export default ContentBody;
