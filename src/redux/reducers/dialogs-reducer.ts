import {uuid} from "uuidv4";
import { DialogType, MessageType } from "../../types/types";
import {ACTIONS_TYPE, DialogsActionTypes} from "./actions/dialogs-actions";

export type DialogsPageStateType = typeof initialState

let initialState = {
    dialogs: [
        {id: uuid(), name: "Diko"},
        {id: uuid(), name: "Almaz"},
        {id: uuid(), name: "Erzhan"},
        {id: uuid(), name: "Banzai"}
    ] as DialogType[],
    messages: [
        {id: uuid(), message: "Hi"},
        {id: uuid(), message: "How are you l"},
        {
            id: uuid(),
            message: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took "
        },
        {id: uuid(), message: "Yo"}
    ] as MessageType[],
}

export const dialogsReducer = (state = initialState, action: DialogsActionTypes): DialogsPageStateType => {

    switch (action.type) {
        case ACTIONS_TYPE.ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: uuid(), ...action.payload}
                ],
            }
        }
        default:
            return state
    }
}

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

