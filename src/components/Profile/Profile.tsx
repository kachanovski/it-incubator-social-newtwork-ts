import React from 'react';
import s from './Profile.module.css'
import ProfilePagePhoto from "./ProfilePagePhoto/ProfilePagePhoto";
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../components/Preloader/Preloader";

type ProfileProps = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
    getUserProfile: (userId: number) => void
    updateProfileInfo: (profile: any) => void
}


const Profile = (props: ProfileProps) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <div className={s.container1}>
                <div className={s.description}>
                    <img alt={'description'}
                         src="https://co12.nevseoboi.com.ua/wallpapers/panoramic/1347913289-644041-0143603_www.nevseoboi.com.ua.jpg"/>
                </div>
                <PostsContainer/>
            </div>

            <div className={s.container2}>
                <ProfilePagePhoto savePhoto={props.savePhoto}
                                  isOwner={props.isOwner}
                                  profile={props.profile}/>
                <ProfileInfo getUserProfile={props.getUserProfile} profile={props.profile}
                             updateProfileInfo={props.updateProfileInfo}/>
            </div>

        </div>
    );
}

export default Profile;

