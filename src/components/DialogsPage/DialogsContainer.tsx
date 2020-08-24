import {connect, ConnectedProps} from "react-redux";
import DialogsPage from "./DialogsPage";
import {StoreReduxType} from "../../redux/store";
import {compose} from 'redux';
import {addMessage, changeMessageTextValue} from '../../redux/redusers/dialogsPageReduser';
import React from "react";
import {withAuthRedirect} from "../../hoc/authRedirect";


let mapStateToProps = (state: StoreReduxType) => {
    return {
        dialogPage: state.dialogsPage
    }
}

const connector = connect(mapStateToProps, {addMessage,changeMessageTextValue })

export type PropsFromRedux = ConnectedProps<typeof connector>

export default compose<React.ComponentType>(
    connector,
    withAuthRedirect
)(DialogsPage)