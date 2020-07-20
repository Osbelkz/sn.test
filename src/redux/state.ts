import os from "./../assets/profile_photo/os.jpg"
import banzai from "./../assets/profile_photo/banzai.jpg"
import diko from "./../assets/profile_photo/diko.jpg"
import gera from "./../assets/profile_photo/gera.jpg"
import {uuid} from "uuidv4";
import {RerenderEntireTreeType} from "../index";

enum ACTION_TYPE {
    ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    ADD_LIKE = "ADD-LIKE",
    ADD_MESSAGE = "ADD-MESSAGE",
    UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT",
}

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



export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType = {
    type: "ADD-POST" | "UPDATE-NEW-POST-TEXT" | "ADD-LIKE" | "ADD-MESSAGE" | "UPDATE-NEW-MESSAGE-TEXT"
    newText?: string
    id?: string
}

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
        switch (action.type) {
            case ACTION_TYPE.ADD_POST:
                if (this._state.profilePage.newPostText) {
                    let newPost: PostsType = {
                        id: uuid(),
                        message: this._state.profilePage.newPostText,
                        likeCounter: 0
                    }
                    this._state.profilePage.posts.push(newPost)
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber(store.getState())
                }
            case ACTION_TYPE.UPDATE_NEW_POST_TEXT :
                if (action.newText) {
                    this._state.profilePage.newPostText = action.newText;
                    this._callSubscriber(store.getState())
                }
            case ACTION_TYPE.ADD_LIKE:
                let post = this._state.profilePage.posts.find(post => post.id === action.id)
                if (post) {
                    post.likeCounter = post.likeCounter + 1
                }
                this._callSubscriber(store.getState())
            case ACTION_TYPE.ADD_MESSAGE:
                if (this._state.dialogsPage.newMessageText) {
                    let newMessage: MessagesType = {
                        id: uuid(),
                        message: this._state.dialogsPage.newMessageText,
                    }
                    this._state.dialogsPage.messages.push(newMessage)
                    this._state.dialogsPage.newMessageText = ''
                    this._callSubscriber(store.getState())
                }
            case ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT:
                if (action.newText) {
                    this._state.dialogsPage.newMessageText = action.newText;
                    this._callSubscriber(store.getState())
                }

        }
    },
};

export const addPostActionCreator = (): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_POST})


export const updateNewPostTextActionCreator = (text: string): DispatchActionType =>
    ({type: ACTION_TYPE.UPDATE_NEW_POST_TEXT, newText: text})

export const addLikeActionCreator = (id: string): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_LIKE, id: id})

export const addMessageActionCreator = (): DispatchActionType =>
    ({type: ACTION_TYPE.ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text: string): DispatchActionType =>
    ({type: ACTION_TYPE.UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store;
