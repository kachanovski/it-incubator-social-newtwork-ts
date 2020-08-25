import React from 'react';
import s from './Posts.module.css'
import { Field, reduxForm } from 'redux-form';


const AddPostForm = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <Field component="input" name="addPostValue" />
          <button  className={s.buttonAddPost} >add post</button>
      </form>
    );
}

export const AddPostFormRedux = reduxForm({
    form:"addPost"
})(AddPostForm)

