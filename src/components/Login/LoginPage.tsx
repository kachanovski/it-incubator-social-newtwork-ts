import React from "react";
import LoginForm from "./LoginPageForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/redusers/authReduser";
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../../redux/store";
import s from './LoginPage.module.css'

type LoginPropsType = {
    login: any
    isAuth: boolean
}   //?????

type loginForm = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginPage = (props: any) => {

    const onSubmit = (loginForm: any) => {
        props.login(loginForm.email, loginForm.password, loginForm.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.loginPage}>
            <div className={s.loginTitle}>

            </div>
            <div className={s.loginForm}>
                <LoginForm onSubmit={onSubmit}/>
            </div>

        </div>

    )
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(LoginPage)
