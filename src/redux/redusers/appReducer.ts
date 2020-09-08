import {Dispatch} from "redux";
import {AppType} from "../../types/types";
import {authMe} from "./authReduser";

export type ActionsType =
    ReturnType<typeof setInitialized>

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState: AppType = {
    initialized: false
}

export const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
    }
    return state
}

export const setInitialized = () => {
    return {
        type: "SET_INITIALIZED",
    } as const
}

export const initializeApp = () => (dispatch: Dispatch<any>) => {  // типизация
    let promise = dispatch(authMe())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })


}