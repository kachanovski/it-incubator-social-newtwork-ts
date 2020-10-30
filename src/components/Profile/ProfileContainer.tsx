import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {StoreReduxType} from "../../redux/store";
import {getUserProfile, getUserStatus, savePhoto, updateUserStatus,updateProfileInfo} from "../../redux/redusers/profilePageReduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";

type ProfileProps = PropsFromRedux
type SomeComponentProps = RouteComponentProps;
type RouteType = {
    userId: number
}

class ProfileContainer extends React.Component<ProfileProps & SomeComponentProps> {
    refreshProfile() {
        let userId: any = (this.props.match.params as RouteType).userId
        if (!userId) {
            userId = this.props.myUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileProps & SomeComponentProps>, prevState: Readonly<{}>, snapshot?: any) {
        if ((this.props.match.params as RouteType).userId !== (prevProps.match.params as RouteType).userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     savePhoto={this.props.savePhoto}
                     isOwner={!(this.props.match.params as RouteType).userId}
                     updateStatus={this.props.updateUserStatus}
                     updateProfileInfo={this.props.updateProfileInfo}
                     getUserProfile={this.props.getUserProfile}
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

const connector = connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto,updateProfileInfo})

export type PropsFromRedux = ConnectedProps<typeof connector>


export default compose<React.ComponentType>(   // ?????
    withRouter,
    connector,
    withAuthRedirect
)(ProfileContainer)