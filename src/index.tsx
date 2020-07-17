import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import {addPost, rootStateType, changePostValue} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

const rerender = (state: rootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} changePostValue={changePostValue} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(state)

subscribe(rerender)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
