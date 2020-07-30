import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';
import ProfileContainer from "../Profile/ProfileContainer";


const ContentBody = () => {
    return (

        <div className="ContentBody">
            {/*  <Route path='/dialogs' render={() => (<Dialogs />)} />*/}
            <Route path='/profile' render={() =>
                (<ProfileContainer />)
            }/>
        </div>
    );
}

export default ContentBody;
