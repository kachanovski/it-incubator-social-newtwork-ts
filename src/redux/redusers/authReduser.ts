import {AuthType} from "../../types/types";
import {Dispatch} from "redux";
import {authAPI} from "../../api/api";

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
                ...action.data,
                isAuth: true
            };
    }
    return state
}

export const setUserAuth = (id: number, login: string, email: string) => {
    return {
        type: "SET_USER_AUTH",
        data: {id, login, email}
    } as const
}

export const authMe = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setUserAuth(id, login, email))
            }
        })
    }

}
export default authReducer