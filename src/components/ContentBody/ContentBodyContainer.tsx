import React from 'react';
import '../../App.css';
import ContentBody from "./ContentBody";
import {StoreType} from "../../redux/store";

type ContentType = {
    store: StoreType
}

const ContentBodyContainer = (props: ContentType) => {

    return (
        <ContentBody store={props.store}/>
    );
}

export default ContentBodyContainer;
