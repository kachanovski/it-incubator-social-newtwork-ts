import React, {ChangeEvent} from 'react';
import '../App.css';
import Posts from './Posts';
import {profilePageType, AddPostType, changePostValueType} from "../redux/state";


type ProfileProps = {
    profilePage: profilePageType
    addPost:AddPostType
    changePostValue:changePostValueType
}

const Profile = (props: ProfileProps) => {

    let addPost = () => {
        props.addPost(props.profilePage.newText)

    }
    let changeNewTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostValue(e.currentTarget.value)

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
