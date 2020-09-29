import {DispatchActionType} from "../types";
import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

enum AUTH_ACTION_TYPE {
    SET_USER_DATA = "SET_USER_DATA",
}

export interface AuthStateType {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

interface SetUserDataActionType {
    type: AUTH_ACTION_TYPE.SET_USER_DATA
    payload: AuthStateType
}

export type AuthActionTypes = SetUserDataActionType

let initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActionTypes) => {

    switch (action.type) {
        case AUTH_ACTION_TYPE.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (payload: AuthStateType): SetUserDataActionType => {
    return {type: AUTH_ACTION_TYPE.SET_USER_DATA, payload: {...payload}}
}

//THUNKS

export const getAuthUserDataTC = () => (dispatch: Dispatch<DispatchActionType>): void => {
    authAPI.getAuthUserData()
        .then(res => {
            let {email, id, login} = res.data.data
            if (res.data.resultCode === 0)
                dispatch(setAuthUserData({email, id, login, isAuth: true}))
        })
}
//any
export const loginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = res.data.messages.length>0 ? res.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<DispatchActionType>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0)
                dispatch(setAuthUserData({isAuth: false, login: null, email: null, id: null}))
        })
}
