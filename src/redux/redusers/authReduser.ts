import { AuthType } from "../../types/types";

export type ActionsType =
    ReturnType<typeof setUserAuth>



const SET_USER_AUTH = "SET_USER_AUTH"



let initialState: AuthType = {
    id: null,
    email: null,
    login: 'privets',
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_AUTH:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
    }
    return state
}

export const setUserAuth = (id: number, login: string, email: string) => {
    debugger
    return {
        type: "SET_USER_AUTH",
        data: {id, login, email}
    } as const
}


export default authReducer