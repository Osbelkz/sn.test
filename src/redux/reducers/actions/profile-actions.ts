import {ProfileType, PhotosType} from "../../../types/types";
import {profileAPI, UpdateProfileRequestType} from "../../../api/api";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux-store";
import {ThunkAction} from "redux-thunk";

export enum ACTIONS_TYPE {
    ADD_POST = "Profile/ADD-POST",
    ADD_LIKE = "Profile/ADD-LIKE",
    DELETE_POST = "Profile/DELETE_POST",
    SET_USER_PROFILE = "Profile/SET_USER_PROFILE",
    SET_USER_STATUS = "Profile/SET_USER_STATUS",
    SET_USER_PHOTO = "Profile/SET_USER_PHOTO",
    UPDATE_PROFILE = "Profile/UPDATE_PROFILE"
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

//              Profile page ACTIONS
//
//
//
//
//

export type AddPostPayloadType = {
    message: string
}
export const addPostAC = makeAction<ACTIONS_TYPE.ADD_POST, AddPostPayloadType>(ACTIONS_TYPE.ADD_POST)

export type AddLikePayloadType = {
    postId: string
}
export const addLikeAC = makeAction<ACTIONS_TYPE.ADD_LIKE, AddLikePayloadType>(ACTIONS_TYPE.ADD_LIKE)

export type DeletePostPayloadType = {
    postId: string
}
export const deletePostAC = makeAction<ACTIONS_TYPE.DELETE_POST, DeletePostPayloadType>(ACTIONS_TYPE.DELETE_POST)

export type SetUserProfilePayloadType = {
    profile: ProfileType
}
export const setUserProfileAC = makeAction<ACTIONS_TYPE.SET_USER_PROFILE, SetUserProfilePayloadType>(ACTIONS_TYPE.SET_USER_PROFILE)

export type setUserStatusPayloadType = {
    status: string
}
export const setUserStatusAC = makeAction<ACTIONS_TYPE.SET_USER_STATUS, setUserStatusPayloadType>(ACTIONS_TYPE.SET_USER_STATUS)

export const setPhotoAC = makeAction<ACTIONS_TYPE.SET_USER_PHOTO, PhotosType>(ACTIONS_TYPE.SET_USER_PHOTO)

export const updateProfileAC = makeAction<ACTIONS_TYPE.UPDATE_PROFILE, UpdateProfileRequestType >(ACTIONS_TYPE.UPDATE_PROFILE)

//              Profile page THUNKS

type GetStateType = () => RootStateType
type DispatchType = Dispatch<ProfilePageActionTypes>
type ThunkType = ThunkAction<void, RootStateType, unknown, ProfilePageActionTypes>


export const getUserProfileTC = (userId: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC({profile: data}))
}

export const getStatusTC = (userId: string): ThunkType => async (dispatch) => {
    let status = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC({status}))
}

export const updateStatusTC = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatusAC({status}))
    }
}
export const savePhotoTC = (file: any): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(setPhotoAC(data.data.photos))
    }
}
export const updateProfileTC = (data: UpdateProfileRequestType): ThunkType => async (dispatch) => {
    let res = await profileAPI.updateProfile(data)
    if (res.data.resultCode === 0) {
        dispatch(updateProfileAC(data))
    }
}

const ProfilePageActions = {
    addPostAC,
    addLikeAC,
    deletePostAC,
    setUserProfileAC,
    setUserStatusAC,
    setPhotoAC,
    updateProfileAC,
}

export type ProfilePageActionTypes = IActionUnion<typeof ProfilePageActions>
