import {dialogPageType, messageType} from "../../types/types";


export type ActionsType = ReturnType<typeof addMessage>

const ADD_MESSAGE = "DIALOGS/ADD_MESSAGE"


const initialState: dialogPageType = {
    messages: [],
}
const newDate = new Date()


export const dialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: messageType = {
                id: 4,
                message: action.addNewMessage,
                date: newDate.toLocaleTimeString()
            }
            return {
                ...state,
                messages: [newMessage, ...state.messages],
            }
    }
    return state
}

export const addMessage = (addNewMessage: string) => {
    return {
        type: "DIALOGS/ADD_MESSAGE",
        addNewMessage
    } as const
}


