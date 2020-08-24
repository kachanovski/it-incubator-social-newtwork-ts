import {postsType, profilePageType} from "../../types/types";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";


export type ActionsType =
    ReturnType<typeof AddPostAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof updateStatus> |
    ReturnType<typeof ChangePostValueAC>

const ADD_POST = "ADD_POST"
const CHANGE_POST_VALUE = "CHANGE_POST_VALUE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS"


let initialState: profilePageType = {
    posts: [
        {id: 1, textPost: 'first', likesCount: 23},
        {id: 2, textPost: 'start', likesCount: 12},
    ],
    newText: "",
    profile: '',
    status: "pitausb ne zastrlitcia"
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
   case UPDATE_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
    }
    return state
}

export const AddPostAC = (newText: string) => {
    return {
        type: "ADD_POST",
        newText
    } as const
}
export const ChangePostValueAC = (newText: string) => {
    return {
        type: "CHANGE_POST_VALUE",
        newText
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "SET_USER_STATUS",
        status
    } as const
}
export const updateStatus = (status: string) => {
    return {
        type: "UPDATE_USER_STATUS",
        status
    } as const
}


export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data))
            })
    }
}
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(updateStatus(data))
                }
            })
    }
}


export default profileReducer