import React from "react";
import LoginForm from "./LoginPageForm";

const LoginPage = () => {

    const onSubmit = (loginForm: any) => {
        console.log(loginForm)
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default LoginPage
