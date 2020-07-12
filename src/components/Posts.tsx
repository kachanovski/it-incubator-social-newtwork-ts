import React from 'react';
import '../App.css';
import Post from "./Post";
import { postsType } from '../redux/state';

type PostPropsType = {
    posts: Array<postsType>
}

const Posts = (props: PostPropsType) => {
    let postsElemets = props.posts.map(posts => <Post key={posts.id}
                                                     posts={posts}
                                                     />)
    return (
        <div>
            {postsElemets}
        </div>
    );
}

export default Posts;
