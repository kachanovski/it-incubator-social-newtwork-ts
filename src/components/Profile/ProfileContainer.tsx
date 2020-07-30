import React from 'react';
import '../../App.css';
import {AddPostAC, ChangePostValueAC} from '../../redux/redusers/profilePageReduser';
import Profile from "./Profile";
import {StoreType} from "../../redux/store";

type ProfileProps = {
    store: StoreType
}

const ProfileContainer = (props: ProfileProps) => {

    const state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(AddPostAC(state.profilePage.newText))

    }
    let changeNewTextValue = (newText: string) => {
        props.store.dispatch(ChangePostValueAC(newText))

    }

    return (
        <Profile addPost={addPost}
                 changeNewTextValue={changeNewTextValue}
                 profilePage={state.profilePage}
                 posts={state.profilePage.posts}/>
    );
}

export default ProfileContainer;
