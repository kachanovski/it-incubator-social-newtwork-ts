import React from 'react';
import '../../../../App.css';
import s from './Post.module.css'
import {postsType} from "../../../../types/types";

type PostPropsType = {
    posts: postsType
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.postInfo}>
                <div>AVA</div>
                <div>date</div>
            </div>

            <div className={s.postText}>{props.posts.textPost}</div>

        </div>
    );
}

export default Post;
