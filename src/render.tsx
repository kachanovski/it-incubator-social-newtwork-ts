import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import  store  from './redux/store';

export const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
