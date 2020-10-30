import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileData = (props: any) => {


    return (
        <div>
            <div className={s.title}>
                <b>fullName:</b> <span>{props.profile.fullName}</span>
            </div>
            <div className={s.title}>
                <b>lookingForAJob:</b> <span>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
            </div>
            <div className={s.title}>
                <b>aboutMe:</b> <span>{props.profile.aboutMe}</span>
            </div>
            <div className={s.title}>
                {Object.keys(props.profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            {props.profile.contacts[key]
                                ? <span><b>{key}:</b> {props.profile.contacts[key]}</span>
                                : null}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


export default ProfileData