import {postsType, profilePageType} from "../../types/types";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {stopSubmit} from "redux-form";


export type ActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setUserStatus> |
    ReturnType<typeof updateStatus> |
    ReturnType<typeof updateProfile> |
    ReturnType<typeof savePhotoSuccess>

const ADD_POST = "PROFILE/ADD_POST"
const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE"
const SET_USER_STATUS = "PROFILE/SET_USER_STATUS"
const UPDATE_USER_STATUS = "PROFILE/UPDATE_USER_STATUS"
const SAVE_PHOTO_SUCCESS = "PROFILE/SAVE_PHOTO_SUCCESS"
const UPDATE_PROFILE_INFO = "PROFILE/UPDATE_PROFILE_INFO"


let initialState: profilePageType = {
    posts: [
        {id: 1, textPost: 'first', likesCount: 23},
        {id: 2, textPost: 'start', likesCount: 12},
    ],
    profile: null,
    status: "",
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photo}
            }
        case UPDATE_PROFILE_INFO:
            return {
                ...state,
                profile: {...state.profile, profile: action.profile}
            }
    }
    return state
}

export const addPost = (addPostValue: string) => {
    return {
        type: "PROFILE/ADD_POST",
        addPostValue
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: "PROFILE/SET_USER_PROFILE",
        profile
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "PROFILE/SET_USER_STATUS",
        status
    } as const
}
export const updateStatus = (status: string) => {
    return {
        type: "PROFILE/UPDATE_USER_STATUS",
        status
    } as const
}

///delete???
export const updateProfile = (profile: any) => {
    return {
        type: "PROFILE/UPDATE_PROFILE_INFO",
        profile
    } as const
}
export const savePhotoSuccess = (photo: any) => {
    return {
        type: "PROFILE/SAVE_PHOTO_SUCCESS",
        photo
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
                if (data.resultCode === 0) {
                    dispatch(updateStatus(status))
                }
            })

    }
}
export const updateProfileInfo = (profile: any) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateProfile(profile)
    if (response.resultCode === 0) {
        dispatch(setUserProfile(profile))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Any error'
        dispatch(stopSubmit("profileInfo", {_error: message.substr(0, 18) + " " + message.substr(30, 30).slice(0, -1)}))
        return Promise.reject()
    }


}

export const savePhoto = (photo: any) => {
    return (dispatch: Dispatch) => {
        profileAPI.savePhotos(photo)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(savePhotoSuccess(data.data.photos))
                }
            })
    }
}
/*

export const savePhoto = (file: any) => async (dispatch: Dispatch) => {
    debugger
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        debugger
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
*/


export default profileReducer