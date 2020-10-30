import React from 'react';
import s from './Posts.module.css'
import {Field, reduxForm} from 'redux-form';
import { MaxLengthCreator, required} from "../../../utils/validators/validators";
import { Input } from '../../../utils/forms/InputForm/InputForm';

const maxLength20 = MaxLengthCreator(20)

const AddPostForm = (props: any) => {
    return (
        <form className={s.addPostForm} onSubmit={props.handleSubmit}>
            <Field placeholder={'Add post'} validate={[required, maxLength20]} component={Input} name="addPostValue"/>
            <button className={s.buttonAddPost}>add post</button>
        </form>
    );
}

export const AddPostFormRedux = reduxForm({
    form: "addPost"
})(AddPostForm)



