import {combineReducers, createStore} from "redux";
import profileReducer from "./redusers/profilePageReduser";

let reducers = combineReducers({
    profilePage: profileReducer
})

export type StoreReduxType = ReturnType<typeof reducers>

let store = createStore(reducers)

export default store

