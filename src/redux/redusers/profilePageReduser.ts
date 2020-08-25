import {postsType, profilePageType} from "../../types/types";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";


export type ActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof updateStatus>

const ADD_POST = "ADD_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_USER_STATUS = "SET_USER_STATUS"
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS"


let initialState: profilePageType = {
    posts: [
        {id: 1, textPost: 'first', likesCount: 23},
        {id: 2, textPost: 'start', likesCount: 12},
    ],
    profile: '',
    status: ""
}

export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsType = {
                id: 3,
                textPost: action.addPostValue,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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

export const addPost = (addPostValue: string) => {
    return {
        type: "ADD_POST",
        addPostValue
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
                    dispatch(updateStatus(status))
                }
            })
    }
}


export default profileReducer