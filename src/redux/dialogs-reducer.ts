import {uuid} from "uuidv4";
import {ACTION_TYPE, DispatchActionType, DialogsPageType} from "./state";

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

export const dialogsReducer = (state=initialState, action: DispatchActionType) => {

    const actionObj: { [key: string]: any  } = {
        [ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT]: {
            ...state,
            newMessageText: action.newMessageText
        },
        [ACTION_TYPE.ADD_MESSAGE]: {
            ...state,
            messages: [...state.messages, {id: uuid(),
                message: state.newMessageText,}]
        },
    }
    return actionObj[action.type] && actionObj[action.type] || state



    // switch (action.type) {
    //     case ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT: {
    //         if (action.newMessageText) {
    //             state.newMessageText = action.newMessageText;
    //         }
    //         return state
    //     }
    //
    //     case ACTION_TYPE.ADD_MESSAGE: {
    //         if (state.newMessageText) {
    //             let newMessage: MessagesType = {
    //                 id: uuid(),
    //                 message: state.newMessageText,
    //             }
    //             state.messages.push(newMessage)
    //             state.newMessageText = ''
    //         }
    //         return state
    //     }
    //     default:
    //         return state
    //
    // }
    // return state;
}


export const addMessageActionCreator = (): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text: string): DispatchActionType =>
    ({type: ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT, newMessageText: text})
