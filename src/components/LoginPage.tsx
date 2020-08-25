import React from "react";
import {Field, reduxForm} from 'redux-form'

const LoginPage = () => {

    const onSubmit = (loginForm: any) => {
        console.log(loginForm)
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage

const LoginForm = (props: any) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={'input'} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={'input'} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={'input'} />
            </div>
            <button>login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
