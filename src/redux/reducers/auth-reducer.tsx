import {DispatchType} from "../types";
import {authAPI} from "../../api/api";

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
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setAuthUserData = (payload: AuthStateType): SetUserDataActionType => {
    return {type: AUTH_ACTION_TYPE.SET_USER_DATA, payload}
}

//THUNKS

export const getAuthUserData = () => (dispatch: DispatchType) => {
    authAPI.getAuthUserData()
        .then(res => {
            if (res.data.resultCode === 0)
                dispatch(setAuthUserData(res.data.data))
        })
}
