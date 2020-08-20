// import {RerenderEntireTreeType} from "../index";
import {ProfilePageType} from "./profilePage-reducer";
import {DialogsPageType} from "./dialogs-reducer";
import {SidebarType} from "./sidebar-reducer";
import {Store, CombinedState} from "redux";

export enum ACTION_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_LIKE = "ADD-LIKE",
    ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
}

export type DispatchActionType = {
    type: ACTION_TYPE
    newPostText?: string
    newMessageText?: string
    id?: string
}


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
// export type StoreType = {
//     _callSubscriber: RerenderEntireTreeType
//     subscribe: (observer: RerenderEntireTreeType) => void
//     _state: StateType
//     getState: () => StateType
//     setState: (newState: StateType) => void
//     dispatch: DispatchType
// }
export type StoreType = Store<CombinedState<StateType>, DispatchActionType>






export type DispatchType = (action: DispatchActionType) => void

