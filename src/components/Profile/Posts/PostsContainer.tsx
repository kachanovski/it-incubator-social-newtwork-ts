import {connect, ConnectedProps} from "react-redux";
import Posts from "./Posts";
import {StoreReduxType} from "../../../redux/store";
import {Dispatch} from "redux";
import {AddPostAC, ChangePostValueAC} from "../../../redux/redusers/profilePageReduser";

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
        posts: state.profilePage.posts,
        newText: state.profilePage.newText
    }
}


const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;
