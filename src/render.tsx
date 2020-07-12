import {addPost, rootStateType, changePostValue} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const rerender = (state: rootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} changePostValue={changePostValue} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}