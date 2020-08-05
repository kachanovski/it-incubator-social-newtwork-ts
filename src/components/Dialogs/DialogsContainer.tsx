import {connect, ConnectedProps} from "react-redux";
import Dialogs from "./Dialogs";
import {StoreReduxType} from "../../redux/store";
import {Dispatch} from 'redux';
import {AddMessageAC, ChangeMessageValueAC} from '../../redux/redusers/dialogsPageReduser';


let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessage: string) => {
            dispatch(AddMessageAC(newMessage))
        },
        changeMessageTextValue: (newMessage: string) => {
            dispatch(ChangeMessageValueAC(newMessage))
        }
    }
}

let mapStateToProps = (state: StoreReduxType) => {
    return {
        dialogPage: state.dialogsPage
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export type PropsFromRedux = ConnectedProps<typeof connector>

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
