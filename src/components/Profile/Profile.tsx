import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import ProfileStatus from "./ProfileStatus";

type ProfileProps = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
}


const Profile = (props: any) => {
    if (!props.profile) {
        return <h3>Loading ....</h3>
    }

    return (
        <div className={s.profile}>
            <div>
                <div className={s.description}>
                    <img
                        src="https://co12.nevseoboi.com.ua/wallpapers/panoramic/1347913289-644041-0143603_www.nevseoboi.com.ua.jpg"/>
                </div>
                <div>
                    {props.profile.fullName}

                    <h2> status</h2>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>


                </div>
                <div className={s.postsBox}>
                    <PostsContainer/>
                </div>
            </div>

            <div className={s.profileBar}>
                <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}/>
                Profile Info
            </div>
        </div>
    );
}

export default Profile;

