import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {StoreReduxType} from "../../redux/store";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/redusers/profilePageReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";

type ProfileProps = PropsFromRedux
type SomeComponentProps = RouteComponentProps;
type RouteType = {
    userId: number
}

class ProfileContainer extends React.Component<ProfileProps & SomeComponentProps> {

    componentDidMount() {
        let userId: any = (this.props.match.params as RouteType).userId    ///типизация??
        if (!userId) {
            userId = this.props.myUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }


    render() {
        return (
            <Profile profile={this.props.profile}
                     updateStatus={this.props.updateUserStatus}
                     status={this.props.status}/>
        )
    }
}


let mapStateToProps = (state: StoreReduxType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const connector = connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus})

export type PropsFromRedux = ConnectedProps<typeof connector>


export default compose<React.ComponentType>(   // ?????
    withRouter,
    connector,
    withAuthRedirect
)(ProfileContainer)