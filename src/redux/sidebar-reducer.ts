import {uuid} from "uuidv4";
import os from "../assets/profile_photo/os.jpg";
import banzai from "../assets/profile_photo/banzai.jpg";
import diko from "../assets/profile_photo/diko.jpg";
import gera from "../assets/profile_photo/gera.jpg";


export type FriendsType = {
    id: string
    name: string
    img: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

let initialState: SidebarType = {
    friends: [
        {id: uuid(), name: 'Os', img: os},
        {id: uuid(), name: 'Banzai', img: banzai},
        {id: uuid(), name: 'Diko', img: diko},
        {id: uuid(), name: 'Gera', img: gera}
    ]
}

export type SidebarActionType = {
    type: any
}

export const sidebarReducer = (state=initialState, action: SidebarActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}
