import os from "./../assets/profile_photo/os.jpg"
import banzai from "./../assets/profile_photo/banzai.jpg"
import diko from "./../assets/profile_photo/diko.jpg"
import gera from "./../assets/profile_photo/gera.jpg"

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likeCounter: number
}

export type FriendsType = {
    id: number
    name: string
    img: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "It's my first post", likeCounter: 333},
            {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", likeCounter: 356}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Diko"},
            {id: 2, name: "Almaz"},
            {id: 3, name: "Erzhan"},
            {id: 4, name: "Banzai"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Monolog"},
            {id: 4, message: "Yo"}
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Os', img: os},
            {id: 2, name: 'Banzai', img: banzai},
            {id: 3, name: 'Diko', img: diko},
            {id: 4, name: 'Gera', img: gera}
        ]
    }


}
export default state;
