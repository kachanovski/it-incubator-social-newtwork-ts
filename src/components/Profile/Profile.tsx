import React from 'react';
import {PropsFromRedux} from "./ProfileContainer";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

type ProfileProps = PropsFromRedux


const Profile = (props: any) => {

    if (!props.profile) {
        return <h3>Loading ....</h3>
    }
    debugger
    return (
        <div className={s.profile}>
            <div>
                <div className={s.description}>
                    <img
                        src="https://co12.nevseoboi.com.ua/wallpapers/panoramic/1347913289-644041-0143603_www.nevseoboi.com.ua.jpg"/>
                </div>
                <div>
                    {props.profile.fullName}
                </div>
                <div className={s.postsBox}>
                    <PostsContainer/>
                </div>
            </div>

            <div className={s.profileBar}>
                <ProfileInfo/>
                Profile Info
            </div>
        </div>
    );
}

export default Profile;
