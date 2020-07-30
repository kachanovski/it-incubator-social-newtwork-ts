import React, {ChangeEvent} from 'react';
import '../../App.css';
import Posts from '../Posts';
import {PropsFromRedux} from "./ProfileContainer";

type ProfileProps = PropsFromRedux


const Profile = (props: ProfileProps) => {

    let addPost = () => {
        props.addPost(props.newText)
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
