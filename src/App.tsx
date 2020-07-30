import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import ContentBody from "./components/ContentBody/ContentBody";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <ContentBody />
            </div>
        </BrowserRouter>
    );
}

export default App;
