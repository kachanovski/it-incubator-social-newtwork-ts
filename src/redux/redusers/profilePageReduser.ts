import {profilePageType, postsType} from "../../types/types";


export type ActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof ChangePostValueAC>

const ADD_POST = "ADD_POST"
const CHANGE_POST_VALUE = "CHANGE_POST_VALUE"


let initialState: profilePageType = {
    posts: [
        {id: 1, textPost: 'first', likesCount: 23},
        {id: 2, textPost: 'start', likesCount: 12},
    ],
    newText: ""
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 3,
                textPost: state.newText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newText = ''
            return {...state};
        case CHANGE_POST_VALUE:
            state.newText = action.newText
            return {...state};
    }
    return state
}

export const AddPostAC = (newText: string) => {
    return {
        type: "ADD_POST",
        newText: newText
    } as const
}
export const ChangePostValueAC = (newText: string) => {
    return {
        type: "CHANGE_POST_VALUE",
        newText: newText
    } as const
}


export default profileReducer