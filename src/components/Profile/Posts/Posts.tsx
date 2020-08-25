import React from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css'
import {PropsFromRedux} from './PostsContainer';
import {AddPostFormRedux} from './AddPostsForm';


const Posts = (props: PropsFromRedux) => {

    let onSubmit = (value: any) => {
        props.addPost(value.addPostValue)
    }

    let postsElemets = props.posts.map(posts => <Post key={posts.id}
                                                      posts={posts}
    />)
    return (
        <div className={s.posts}>
            <div className={s.addForm}>
                <AddPostFormRedux onSubmit={onSubmit}/>
            </div>

            <div>
                {postsElemets}
            </div>
        </div>
    );
}

export default Posts;
