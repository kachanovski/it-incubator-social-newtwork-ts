import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import s from './Posts.module.css'
import {PropsFromRedux} from './PostsContainer';


const Posts = (props: PropsFromRedux) => {

    let addPost = () => {
        props.addPost(props.newText)
    }
    let changeNewTextValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeNewTextValue(e.currentTarget.value)
    }


    let postsElemets = props.posts.map(posts => <Post key={posts.id}
                                                                  posts={posts}
    />)
    return (
        <div className={s.posts}>
            <div className={s.addForm}>
                <input type={'text'}
                       value={props.newText}
                       onChange={changeNewTextValue}/>
                <button className={s.buttonAddPost} onClick={addPost}>Add Post</button>
            </div>

            <div>
                {postsElemets}
            </div>
        </div>
    );
}

export default Posts;
