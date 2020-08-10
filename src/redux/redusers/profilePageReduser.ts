import {profilePageType, postsType} from "../../types/types";


export type ActionsType =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof ChangePostValueAC>

const ADD_POST = "ADD_POST"
const CHANGE_POST_VALUE = "CHANGE_POST_VALUE"
const SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState: profilePageType = {
    posts: [
        {id: 1, textPost: 'first', likesCount: 23},
        {id: 2, textPost: 'start', likesCount: 12},
    ],
    newText: "",
    profile: ''
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 3,
                textPost: state.newText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newText: ""
            }
        case CHANGE_POST_VALUE:
            return {
                ...state,
                newText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
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
export const setUserProfile = (profile: any) => {
    return {
        type: "SET_USER_PROFILE",
       profile
    } as const
}


export default profileReducer