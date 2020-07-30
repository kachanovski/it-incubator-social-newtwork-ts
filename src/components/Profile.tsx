import React, {ChangeEvent} from 'react';
import '../App.css';
import Posts from './Posts';
import {ActionsType, AddPostAC, ChangePostValueAC} from "../redux/redusers/profilePageReduser";
import {profilePageType} from '../types/types';


type ProfileProps = {
    profilePage: profilePageType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfileProps) => {

    let addPost = () => {
        props.dispatch(AddPostAC(props.profilePage.newText))

    }
    let changeNewTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(ChangePostValueAC(e.currentTarget.value))

    }

    return (
        <div className="ContentBody">
            <textarea value={props.profilePage.newText} onChange={changeNewTextValue}/>
            <button onClick={addPost}>Add Post</button>
            <Posts posts={props.profilePage.posts}/>
        </div>
    );
}

export default Profile;
