//              Auth ACTIONS
//
//
//
//
//

import {AuthStateType} from "../auth-reducer";
import {Dispatch} from "redux";
import {DispatchActionType} from "../../../types/types";
import {authAPI} from "../../../api/api";
import {stopSubmit} from "redux-form";

export enum ACTIONS_TYPE {
    SET_AUTH_USER_DATA = "Auth/SET_AUTH_USER_DATA",
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;


export const setAuthUserDataAC = makeAction<ACTIONS_TYPE.SET_AUTH_USER_DATA, AuthStateType>(ACTIONS_TYPE.SET_AUTH_USER_DATA)

//Auth THUNKS

export const getAuthUserDataTC = () => (dispatch: Dispatch<DispatchActionType>): void => {
    authAPI.getAuthUserData()
        .then(data => {
            let {email, id, login} = data.data
            if (data.resultCode === 0)
                dispatch(setAuthUserDataAC({email, id, login, isAuth: true}))
        })
}
//any
export const loginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<DispatchActionType>) => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0)
                dispatch(setAuthUserDataAC({isAuth: false, login: null, email: null, id: null}))
        })
}


const AuthActions = {
    setAuthUserDataAC
}
export type AuthActionTypes = IActionUnion<typeof AuthActions>

