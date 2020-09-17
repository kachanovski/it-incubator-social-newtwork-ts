import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from '../../../accets/images/user.png'

const ProfileInfo = (props: any) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>

            <div className={s.profileInfoAvatar}>

            </div>
            <div>
                name Soname
            </div>
            <div className={s.gallery}>
                <div className={s.galleryItem}>1</div>
                <div className={s.galleryItem}>2</div>
                <div className={s.galleryItem}> 3</div>
                <div className={s.galleryItem}>4</div>
            </div>

            <div>
                <img alt={'avatar'} src={props.profile.photos.large || userPhoto}/>
                {props.isOwner &&
                <input type={'file'}
                onChange={onMainPhotoSelected}/>}
            </div>
        </div>
    );
}

export default ProfileInfo;
