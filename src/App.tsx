import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import {StoreType} from './redux/store';
import ContentBodyContainer from "./components/ContentBody/ContentBodyContainer";


export type AppProps = {
    store:StoreType
}

const App: React.FC<AppProps> = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentBodyContainer store={props.store}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
