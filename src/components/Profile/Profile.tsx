import React, {ChangeEvent} from 'react';
import '../../App.css';
import Posts from '../Posts';
import {postsType, profilePageType} from "../../types/types";

type ProfileProps = {
    posts: Array<postsType>
    profilePage: profilePageType
    addPost: () => void
    changeNewTextValue: (newText: string) => void
}

const Profile = (props: ProfileProps) => {

    let addPost = () => {
        props.addPost()
    }
    let changeNewTextValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextValue(e.currentTarget.value)


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
