import React from 'react';
import './App.css';
import Header from "./components/Header";
import ContentBody from './components/ContentBody';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import store from './redux/store';
import { StoreType } from './redux/store';


export type AppProps = {
    store:StoreType
}

const App: React.FC<AppProps> = (props) => {

    const state = props.store.getState()
debugger
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentBody state={state}
                             dispatch={store.dispatch.bind(props.store)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
