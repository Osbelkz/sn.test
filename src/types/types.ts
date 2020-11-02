import {ProfilePageActionTypes} from "../redux/reducers/actions/profile-actions";
import {DialogsActionTypes} from "../redux/reducers/actions/dialogs-actions";
import {UsersActionTypes} from "../redux/reducers/actions/users-actions";
import {AuthActionTypes} from "../redux/reducers/actions/auth-actions";

export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType =
    ProfilePageActionTypes
    | DialogsActionTypes
    | UsersActionTypes
    | AuthActionTypes

export type ContactsType = {
    [key: string]: string | null
    // vk: string | null
    // facebook: string | null
    // instagram: string | null
    // twitter: string | null
    // website: string | null
    // youtube: string | null
    // mainLink: string | null
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    aboutMe: string | null
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export interface PostType {
    id: string
    message: string
    likeCounter: number
}

export interface MessageType {
    id: string
    message: string
    photo?: string
    time?: string
    name?: string
}

export interface DialogType {
    id: string
    name: string
}

export interface UserType {
    id: string
    name: string
    followed: boolean
    status: string
    uniqueUrlName: string | null
    photos: PhotosType
}

