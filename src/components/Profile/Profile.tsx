import React, {ChangeEvent, useState} from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

type ProfileProps = {}


const Profile = (props: any) => {
debugger
    let [editMode, setEditMode] = useState(false)
    let [statusValue, setStatusValue] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(statusValue)
    }
    let onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }


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
                    <div>
                        {editMode
                            ? <input value={statusValue} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus/>
                            : <span onClick={activateEditMode}> {statusValue}</span>
                        }
                    </div>


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
