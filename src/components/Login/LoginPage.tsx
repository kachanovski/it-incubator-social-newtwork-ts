import React from "react";
import LoginForm from "./LoginPageForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/redusers/authReduser";
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../../redux/store";

const LoginPage = (props: any) => {

    const onSubmit = (loginForm: any) => {
        props.login(loginForm.email, loginForm.password, loginForm.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(LoginPage)
