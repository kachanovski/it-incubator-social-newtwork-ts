import React from 'react';
import s from './Posts.module.css'
import {Field, reduxForm} from 'redux-form';
import {Input, MaxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength20 = MaxLengthCreator(20)

const AddPostForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength20]} component={Input} name="addPostValue"/>
            <button className={s.buttonAddPost}>add post</button>
        </form>
    );
}

export const AddPostFormRedux = reduxForm({
    form: "addPost"
})(AddPostForm)



