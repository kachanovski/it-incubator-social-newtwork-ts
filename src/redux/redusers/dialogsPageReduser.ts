import {dialogPageType, messageType} from "../../types/types";


export type ActionsType = ReturnType<typeof AddMessageAC> | ReturnType<typeof ChangeMessageValueAC>

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_MESSAGE_VALUE = "CHANGE_MESSAGE_VALUE"


let initialState: dialogPageType = {
    messages: [ ],
    newMessage: ""
}
let newDate = new Date()


export const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: messageType = {
                id: 4,
                message: state.newMessage,
                date: newDate.toLocaleTimeString()
            }
            return {
                ...state,
                messages: [newMessage, ...state.messages],
                newMessage: ""
            }
        case CHANGE_MESSAGE_VALUE:
            return {
                ...state,
                newMessage: action.newMessage
            }
    }
    return state
}

export const AddMessageAC = (newMessage: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessage: newMessage
    } as const
}
export const ChangeMessageValueAC = (newMessage: string) => {
    return {
        type: "CHANGE_MESSAGE_VALUE",
        newMessage: newMessage
    } as const
}

