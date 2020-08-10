import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';

import DialogsContainer from "../DialogsPage/DialogsContainer";
import UsersContainer from '../Users/UsersContainer';
import ProfileContainer from "../Profile/ProfileContainer";


const ContentBody = () => {
    return (

        <div className="ContentBody">'
            <Route path='/dialogs' render={() => (<DialogsContainer/>)}/>
            <Route path='/profile/:userId?' render={() => (<ProfileContainer />)}/>
            <Route path='/users' render={() => (<UsersContainer/>)}/>
        </div>
    );
}

export default ContentBody;
