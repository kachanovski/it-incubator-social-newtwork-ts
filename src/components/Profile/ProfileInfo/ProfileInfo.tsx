import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileData from './ProfileData';

type ProfileInfoPropsType = {
    updateProfileInfo: (profile: any) => any ////??????
    getUserProfile: (userId: number) => void
    profile: any
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState(false)

    const onSubmit = (profileInfo: any) => {
        props.updateProfileInfo(profileInfo).then(() =>{
            setEditMode(false)
        })

    }

    return (
        <div className={s.profileInfo}>
            {editMode
                ? null
                : <button onClick={() => {
                    setEditMode(true)
                }}>change</button>}
            {editMode
                ? <ProfileInfoForm onSubmit={onSubmit} initialValues={props.profile}/>
                : <ProfileData profile={props.profile}/>}

        </div>
    );
}

export default ProfileInfo