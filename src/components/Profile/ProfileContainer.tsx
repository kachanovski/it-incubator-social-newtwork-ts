import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store";
import axios from "axios";
import { setUserProfile } from "../../redux/redusers/profilePageReduser";
import { withRouter, RouteComponentProps } from "react-router-dom";

type ProfileProps = PropsFromRedux
type SomeComponentProps = RouteComponentProps;
type RoyteType = {
    userId: string
}
class ProfileContainer extends React.Component<ProfileProps & SomeComponentProps> {

    componentDidMount() {
        let userId = (this.props.match.params as RoyteType).userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
debugger
        return (
            <Profile profile={this.props.profile}  />
        )
    }
}


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (profile: any) => {
            dispatch(setUserProfile(profile))
        }
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        profile: state.profilePage.profile
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

let newCom = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(newCom)
