import {createStore} from "redux";
import profileReducer from "./redusers/profilePageReduser";


let store = createStore(profileReducer)

export default store