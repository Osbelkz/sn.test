import {DispatchActionType, SidebarType} from "./state";
import {uuid} from "uuidv4";
import os from "../assets/profile_photo/os.jpg";
import banzai from "../assets/profile_photo/banzai.jpg";
import diko from "../assets/profile_photo/diko.jpg";
import gera from "../assets/profile_photo/gera.jpg";

let initialState: SidebarType = {
    friends: [
        {id: uuid(), name: 'Os', img: os},
        {id: uuid(), name: 'Banzai', img: banzai},
        {id: uuid(), name: 'Diko', img: diko},
        {id: uuid(), name: 'Gera', img: gera}
    ]
}

export const sidebarReducer = (state=initialState, action: DispatchActionType) => {


    return state;
}
