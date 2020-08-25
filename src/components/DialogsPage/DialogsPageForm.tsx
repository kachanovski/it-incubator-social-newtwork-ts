import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required, Textarea, MaxLengthCreator} from '../../utils/validators/validators';

const maxLength30 =  MaxLengthCreator(30)

const AddMessageForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength30]} name="addNewMessage"/>
            </div>
            <button>add</button>
        </form>
    );
}

export const AddMessageFormRedux = reduxForm({
    form: 'addNewMessage'
})(AddMessageForm)


