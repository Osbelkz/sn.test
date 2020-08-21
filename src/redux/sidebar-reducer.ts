import {uuid} from "uuidv4";
import os from "../assets/profile_photo/os.jpg";
import banzai from "../assets/profile_photo/banzai.jpg";
import diko from "../assets/profile_photo/diko.jpg";
import gera from "../assets/profile_photo/gera.jpg";

export interface FriendsType {
    id: string
    name: string
    img: string
}
export interface SidebarStateType {
    friends: Array<FriendsType>
}

let initialState: SidebarStateType = {
    friends: [
        {id: uuid(), name: 'Os', img: os},
        {id: uuid(), name: 'Banzai', img: banzai},
        {id: uuid(), name: 'Diko', img: diko},
        {id: uuid(), name: 'Gera', img: gera}
    ]
}

export type SidebarActionTypes = {
    type: any
}

export const sidebarReducer = (state=initialState, action: SidebarActionTypes) => {
    switch (action.type) {
        default:
            return state;
    }
}
