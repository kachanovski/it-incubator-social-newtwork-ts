import {connect, ConnectedProps} from "react-redux";
import Posts from "./Posts";
import {StoreReduxType} from "../../../redux/store";
import {compose} from "redux";
import {addPost} from "../../../redux/redusers/profilePageReduser";

let mapStateToProps = (state: StoreReduxType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

const connector = connect(mapStateToProps, {addPost})

export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
    connector
)(Posts)