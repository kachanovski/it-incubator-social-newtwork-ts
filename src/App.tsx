import React from 'react';
import './App.css';
import Header from "./components/Header";
import ContentBody from './components/ContentBody';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import {rootStateType, AddPostType, changePostValueType} from './redux/state';


export type AppProps = {
    state: rootStateType
    addPost: AddPostType
    changePostValue:changePostValueType
}


const App = (props: AppProps) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentBody changePostValue={props.changePostValue}
                             state={props.state}
                             addPost={props.addPost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
