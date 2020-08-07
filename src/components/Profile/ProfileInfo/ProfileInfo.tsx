import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {

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


        </div>
    );
}

export default ProfileInfo;
