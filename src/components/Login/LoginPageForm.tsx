import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Input, MaxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = MaxLengthCreator(10)

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"}
                       validate={[required, maxLength10]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"}
                       validate={[required, maxLength10]} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
            </div>
            <button>login</button>
        </form>
    )
}

export default reduxForm({
    form: 'login'
})(LoginForm)
