//              Auth ACTIONS
//
//
//
//
//

import {AuthStateType} from "../auth-reducer";
import {Dispatch} from "redux";
import {authAPI, ResultCodes} from "../../../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {RootStateType} from "../../redux-store";
import {ThunkAction} from "redux-thunk";
import {ProfilePageActionTypes} from "./profile-actions";

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
type GetStateType = () => RootStateType
type DispatchType = Dispatch<ProfilePageActionTypes>
type ThunkType = ThunkAction<void, RootStateType, unknown, AuthActionTypes | FormAction>


export const getAuthUserDataTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.getAuthUserData()
    let {email, id, login} = data.data
    if (data.resultCode === ResultCodes.Success)
        dispatch(setAuthUserDataAC({email, id, login, isAuth: true}))
}
//any
export const loginTC = (email: string, password: string, rememberMe: boolean = false): ThunkType =>
    async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(getAuthUserDataTC())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
export const logoutTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success)
        dispatch(setAuthUserDataAC({isAuth: false, login: null, email: null, id: null}))
}


const AuthActions = {
    setAuthUserDataAC
}
export type AuthActionTypes = IActionUnion<typeof AuthActions>

