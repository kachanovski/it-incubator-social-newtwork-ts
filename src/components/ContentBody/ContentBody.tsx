import React from 'react';
import '../../App.css';
import {Route} from 'react-router-dom';
import {StoreType} from "../../redux/store";
import ProfileContainer from "../Profile/ProfileContainer";

type ContentType = {
    store: StoreType
}

const ContentBody = (props: ContentType) => {
    return (

        <div className="ContentBody">
            {/*  <Route path='/dialogs' render={() => (<Dialogs />)} />*/}
            <Route path='/profile' render={() =>
                (<ProfileContainer store={props.store}/>
                )
            }/>
        </div>
    );
}

export default ContentBody;
