import {uuid} from "uuidv4";

enum DIALOGS_ACTION_TYPE {
    ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
}

export interface MessagesType {
    id: string
    message: string
}
export interface DialogsType {
    id: string
    name: string
}
export interface DialogsPageStateType {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

interface AddMessageActionType {
    type: DIALOGS_ACTION_TYPE.ADD_MESSAGE
}
interface UpdateNewMessageTextActionType {
    type: DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}

export type DialogsActionTypes = AddMessageActionType | UpdateNewMessageTextActionType

let initialState: DialogsPageStateType = {
    dialogs: [
        {id: uuid(), name: "Diko"},
        {id: uuid(), name: "Almaz"},
        {id: uuid(), name: "Erzhan"},
        {id: uuid(), name: "Banzai"}
    ],
    messages: [
        {id: uuid(), message: "Hi"},
        {id: uuid(), message: "How are you l"},
        {
            id: uuid(),
            message: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
        },
        {id: uuid(), message: "Yo"}
    ],
    newMessageText: 'hi'
}

export const dialogsReducer = (state=initialState, action: DialogsActionTypes) => {

    // const actionObj: { [key: string]: any  } = {
    //     [ACTION_TYPE.ADD_MESSAGE]: {
    //         ...state,
    //         messages: [...state.messages, {id: uuid(),
    //             message: state.newMessageText,}]
    //     },
    //     [ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT]: {
    //         ...state,
    //         newMessageText: action.newMessageText
    //     },
    // }
    // return actionObj[action.type] && actionObj[action.type] || state

    switch (action.type) {
        case DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        case DIALOGS_ACTION_TYPE.ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: uuid(), message: state.newMessageText}
                    ],
                newMessageText: ""
            }
        }
        default:
            return state
    }
}


export const addMessageAC = (): AddMessageActionType => {
    return {type: DIALOGS_ACTION_TYPE.ADD_MESSAGE}
}
export const updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextActionType => {
   return  {type: DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText}
}
