import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";


const ContentBody = () => {
    return (

        <div className="ContentBody">
            <Route path='/dialogs' render={() => (<DialogsContainer/>)}/>
            <Route path='/profile' render={() => (<ProfileContainer/>)}/>
        </div>
    );
}

export default ContentBody;
