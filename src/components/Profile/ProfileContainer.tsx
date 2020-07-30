import '../../App.css';
import {AddPostAC, ChangePostValueAC} from '../../redux/redusers/profilePageReduser';
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {Dispatch} from "redux";
import {StoreReduxType} from "../../redux/store";

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newText: string) => {
            dispatch(AddPostAC(newText))
        },
        changeNewTextValue: (newText: string) => {
            dispatch(ChangePostValueAC(newText))
        }
    }
}
let mapStateToProps = (state: StoreReduxType) => {
    return {
        profilePage: state.profilePage,
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;
