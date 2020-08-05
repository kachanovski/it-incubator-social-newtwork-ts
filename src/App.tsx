import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import ContentBody from "./components/ContentBody/ContentBody";


const App: React.FC = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <NavBar/>
                <ContentBody />

            </div>
        </BrowserRouter>
    );
}

export default App;
