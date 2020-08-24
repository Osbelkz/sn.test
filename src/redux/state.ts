
import os from "./../assets/profile_photo/os.jpg"
import banzai from "./../assets/profile_photo/banzai.jpg"
import diko from "./../assets/profile_photo/diko.jpg"
import gera from "./../assets/profile_photo/gera.jpg"
import {uuid} from "uuidv4";
// import {RerenderEntireTreeType} from "../index";
import {profileReducer} from "./reducers/profile-page-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";


/*
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type PostsType = {
    id: string
    message: string
    likeCounter: number
}
export type FriendsType = {
    id: string
    name: string
    img: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _callSubscriber: RerenderEntireTreeType
    subscribe: (observer: RerenderEntireTreeType) => void
    _state: StateType
    getState: () => StateType
    setState: (newState: StateType) => void
    dispatch: DispatchType
}


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

export type DispatchType = (action: DispatchActionType) => void



let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: uuid(), message: "It's my first post", likeCounter: 333},
                {id: uuid(), message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
            ],
            newPostText: 'fd'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: uuid(), name: 'Os', img: os},
                {id: uuid(), name: 'Banzai', img: banzai},
                {id: uuid(), name: 'Diko', img: diko},
                {id: uuid(), name: 'Gera', img: gera}
            ]
        }
    },
    _callSubscriber: () => {
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    setState(newState) {
        this._state = newState
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)
    },
};


export default store;
*/
