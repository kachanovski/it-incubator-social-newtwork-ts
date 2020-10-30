import React, {ChangeEvent} from 'react';
import s from './ProfilePagePhoto.module.css'
import userPhoto from '../../../accets/images/user.png'

type ProfileInfoPropsType = {
    savePhoto: (file: object) => void
    profile: any
    isOwner: boolean
}

const ProfilePagePhoto = (props: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.ProfilePagePhoto}>
            <div className={s.profilePageAvatar}>
                <img alt={'avatar'} src={props.profile.photos.large || userPhoto}/>
                {props.isOwner &&
                <input type={'file'}
                       onChange={onMainPhotoSelected}/>}
            </div>
            <div className={s.fullNameProfilePage}>
                {props.profile.fullName}
            </div>
        </div>
    );
}

export default ProfilePagePhoto;
