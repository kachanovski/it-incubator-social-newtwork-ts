import React from 'react';
import {connect, ConnectedProps} from "react-redux";
import Auth from "./Auth";
import {StoreReduxType} from "../../redux/store";
import {authMe, logout, setUserAuth} from "../../redux/redusers/authReduser";
import {compose} from "redux";

type AuthProps = PropsFromRedux

class AuthContainer extends React.Component<AuthProps> {

    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Auth login={this.props.login}
                  logout={this.props.logout}
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


const connector = connect(mapStateToProps, {setUserAuth, authMe, logout})

export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
    connector
)(AuthContainer)
