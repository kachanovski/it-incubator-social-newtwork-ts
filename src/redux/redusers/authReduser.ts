import {AuthType} from "../../types/types";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import { stopSubmit } from "redux-form";

export type ActionsType =
    ReturnType<typeof setUserAuth>

const SET_USER_AUTH = "SET_USER_AUTH"

let initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_AUTH:
            return {
                ...state,
                ...action.payload,
            };
    }
    return state
}

export const setUserAuth = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_AUTH",
        payload: {id, login, email, isAuth}
    } as const
}

export const authMe = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserAuth(id, login, email, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {  //??????????????????????
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(authMe())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Any error'
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }

}
export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuth(null, null, null, false))
            }
        })
    }

}
export default authReducer