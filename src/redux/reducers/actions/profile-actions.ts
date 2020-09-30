import {DispatchType, ProfileType} from "../../../types/types";
import {profileAPI} from "../../../api/api";
import {Dispatch} from "redux";

export enum ACTIONS_TYPE {
    ADD_POST = "Profile/ADD-POST",
    ADD_LIKE = "Profile/ADD-LIKE",
    DELETE_POST = "Profile/DELETE_POST",
    SET_USER_PROFILE = "Profile/SET_USER_PROFILE",
    SET_USER_STATUS = "Profile/SET_USER_STATUS",
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

//              Profile page THUNKS

export const getUserProfileTC = (userId: string) => (dispatch: DispatchType) => {
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC({profile: data}))
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(status => {
            dispatch(setUserStatusAC({status}))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatusAC({status}))
            }

        })
}

const ProfilePageActions = {
    addPostAC,
    addLikeAC,
    deletePostAC,
    setUserProfileAC,
    setUserStatusAC,
}

export type ProfilePageActionTypes = IActionUnion<typeof ProfilePageActions>
