const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newText = action.newText
            return state;

        default:
            return state
    }

    return state

}

export default profileReducer