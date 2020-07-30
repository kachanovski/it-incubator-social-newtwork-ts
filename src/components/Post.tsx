import React from 'react';
import '../App.css';
import { postsType } from '../types/types';

type PostPropsType = {
    posts: postsType
}

const Post = (props: PostPropsType) => {
    return (
        <div >
            {props.posts.textPost}
        </div>
    );
}

export default Post;
