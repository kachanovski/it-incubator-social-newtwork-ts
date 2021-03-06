import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import ContentBody from "./components/ContentBody/ContentBody";
import {connect, ConnectedProps} from 'react-redux';
import {StoreReduxType} from "./redux/store";
import {compose} from 'redux';
import {initializeApp} from "./redux/redusers/appReducer";
import Preloader from "./components/components/Preloader/Preloader";

type AppProps = PropsFromRedux

class App extends React.Component<AppProps> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <ContentBody/>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        initialized: state.app.initialized
    }
}
const connector = connect(mapStateToProps, {initializeApp})

export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
    connector
)(App);
