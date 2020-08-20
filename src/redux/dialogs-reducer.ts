import {uuid} from "uuidv4";
import {ACTION_TYPE} from "./types";

export type MessagesType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type AddMessageActionType = {
    type: ACTION_TYPE.ADD_MESSAGE
}
export type UpdateNewMessageTextActionType = {
    type: ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT
    newMessageText: string
}

export type DialogsActionType = AddMessageActionType | UpdateNewMessageTextActionType


let initialState: DialogsPageType = {
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

export const dialogsReducer = (state=initialState, action: DialogsActionType) => {

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
        case ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        }
        case ACTION_TYPE.ADD_MESSAGE: {
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


export const addMessageActionCreator = (): AddMessageActionType => {
    return {type: ACTION_TYPE.ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (newMessageText: string): UpdateNewMessageTextActionType => {
   return  {type: ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText}
}
