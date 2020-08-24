import React from "react";
import {Redirect} from "react-router-dom";
import {StoreReduxType} from "../redux/store";
import {connect} from "react-redux";


type AuthRedirectType = {

}

let mapStateToProps = (state: StoreReduxType) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />;
        }
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectRedirectComponent
}


