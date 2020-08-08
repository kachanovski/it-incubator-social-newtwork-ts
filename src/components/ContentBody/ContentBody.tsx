import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../DialogsPage/DialogsContainer";
import UsersContainer from '../Users/UsersContainer';


const ContentBody = () => {
    return (

        <div className="ContentBody">
            <Route path='/dialogs' render={() => (<DialogsContainer/>)}/>
            <Route path='/profile' render={() => (<ProfileContainer/>)}/>
            <Route path='/users' render={() => (<UsersContainer/>)}/>
        </div>
    );
}

export default ContentBody;
