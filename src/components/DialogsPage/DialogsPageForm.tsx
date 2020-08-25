import React from 'react';
import {Field, reduxForm} from 'redux-form';

const AddMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="addNewMessage"/>
            </div>
            <button>add</button>
        </form>
    );
}

export const AddMessageFormRedux = reduxForm({
    form: 'addNewMessage'
})(AddMessageForm)


