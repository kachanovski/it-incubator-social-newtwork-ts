import React from 'react';
import '../../../../App.css';
import s from './Post.module.css'
import {postsType} from "../../../../types/types";

type PostPropsType = {
    posts: postsType
    profile: any
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.postInfo}>
                <div className={s.postAvatar}>
                    <div>{props.profile.fullName}</div>
                    <img alt={'ava'} src={props.profile.photos.small}/>
                </div>
            </div>

            <div className={s.postsText}>{props.posts.textPost}</div>

        </div>
    );
}

export default Post;
