import React from 'react';
import {postsType} from "../../../types/types";
import Post from "./Post/Post";
import s from './Posts.module.css'


type PostPropsType = {
    posts: Array<postsType>
}

const Posts = (props: PostPropsType) => {
    let postsElemets = props.posts.map(posts => <Post key={posts.id}
                                                     posts={posts}
                                                     />)
    return (
        <div className={s.posts}>
            {postsElemets}
        </div>
    );
}

export default Posts;
