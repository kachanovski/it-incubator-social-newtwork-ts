import React, {ChangeEvent} from 'react';
import '../../App.css';
import Posts from './Posts/Posts';
import {PropsFromRedux} from "./ProfileContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileProps = PropsFromRedux


const Profile = (props: ProfileProps) => {

    let addPost = () => {
        props.addPost(props.profilePage.newText)
    }
    let changeNewTextValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewTextValue(e.currentTarget.value)
    }

    return (
        <div className={s.profile}>
            <div>
                <div className={s.description}>
                    description
                </div>
                <div className={s.addForm}>
                    <input type={'text'}
                           value={props.profilePage.newText}
                           onChange={changeNewTextValue}/>

                    <button className={s.buttonAddPost} onClick={addPost}>Add Post</button>
                </div>

                <Posts posts={props.profilePage.posts}/>
            </div>

            <div className={s.profileBar}>
                <ProfileInfo/>
                <div>
                    Profile Info
                </div>

            </div>
        </div>
    );
}

export default Profile;
