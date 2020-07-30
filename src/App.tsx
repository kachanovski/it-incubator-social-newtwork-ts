import React from 'react';
import './App.css';
import Header from "./components/Header";
import ContentBody from './components/ContentBody';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import {store, StoreType} from './redux/state';


export type AppProps = {
    store:StoreType
}


const App: React.FC<AppProps> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentBody changePostValue={props.store.changePostValue.bind(props.store)}
                             state={state}
                             dispatch={store.dispatch.bind(props.store)}
                             addPost={props.store.addPost.bind(props.store)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
