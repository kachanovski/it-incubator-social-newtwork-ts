import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'
import {connect, ConnectedProps} from "react-redux";
import Auth from "./Auth";
import {StoreReduxType} from "../../redux/store";
import {Dispatch} from "redux";
import axios from "axios";
import {AuthType, AuthDataType} from "../../types/types";
import {setUserAuth} from "../../redux/redusers/authReduser";

type AuthProps = PropsFromRedux

class AuthContainer extends React.Component<AuthProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email} = response.data.data
                    this.props.setUserAuth(id, login, email)
                }

            })
    }

    render() {
        return (
            <Auth login={this.props.login}
                  isAuth={this.props.isAuth}/>
        );
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    debugger
    return {
        setUserAuth: (id: number, login: string, email: string) => {
            dispatch(setUserAuth(id, login, email))
        }
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
