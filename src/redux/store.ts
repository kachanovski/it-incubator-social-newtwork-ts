import {combineReducers, createStore} from "redux";
import profileReducer, {ActionsType} from "./redusers/profilePageReduser";
import {rootStateType} from "../types/types";

export type StoreType = {
    _state: rootStateType
    changePostValue: (newText: string) => void
    addPost: () => void
    _rerender: () => void
    subscribe: (callback: () => void) => void
    getState: () => rootStateType
    dispatch: (action: ActionsType) => void
}

let reducers = combineReducers({
    profilePage: profileReducer
})

let store: StoreType = createStore(reducers)

export default store

