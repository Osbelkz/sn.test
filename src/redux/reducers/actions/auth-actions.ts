import {Dispatch} from "redux";
import {authAPI, ResultCodes, securityAPI} from "../../../api/api";
import {FormAction} from "redux-form";
import {RootStateType} from "../../redux-store";
import {ThunkAction} from "redux-thunk";
import {ProfilePageActionTypes} from "./profile-actions";

export enum ACTIONS_TYPE {
    SET_AUTH_USER_DATA = "Auth/SET_AUTH_USER_DATA",
    GET_CAPTCHA_URL_SUCCESS = "Auth/GET_CAPTCHA_URL_SUCCESS",
    SET_AUTH_ERROR_TEXT = "Auth/SET_AUTH_ERROR_TEXT",
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

type setAuthUserDataPayload = {
    id: string | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captchaUrl?: string | null
}
export const setAuthUserDataAC = makeAction<ACTIONS_TYPE.SET_AUTH_USER_DATA, setAuthUserDataPayload>(ACTIONS_TYPE.SET_AUTH_USER_DATA)
export const getCaptchaUrlSuccessAC = makeAction<ACTIONS_TYPE.GET_CAPTCHA_URL_SUCCESS, { captchaUrl: string }>(ACTIONS_TYPE.GET_CAPTCHA_URL_SUCCESS)
export const setAuthErrorTextAC = makeAction<ACTIONS_TYPE.SET_AUTH_ERROR_TEXT, { error: string }>(ACTIONS_TYPE.SET_AUTH_ERROR_TEXT)

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
export const loginTC = (email: string,
                        password: string,
                        rememberMe: boolean = false,
                        captcha: string): ThunkType =>
    async (dispatch) => {
        dispatch(setAuthErrorTextAC({error: ""}))
        let data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === ResultCodes.Success) {
            dispatch(getAuthUserDataTC())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let error = data.messages.length > 0 ? data.messages[0] : "Some error"
            dispatch(setAuthErrorTextAC({error}))
        }
    }
export const logoutTC = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success)
        dispatch(setAuthUserDataAC({isAuth: false, login: null, email: null, id: null, captchaUrl: null}))
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchUrl()
    dispatch(getCaptchaUrlSuccessAC({captchaUrl: response.data.url}))
}

const AuthActions = {
    setAuthUserDataAC,
    getCaptchaUrlSuccessAC,
    setAuthErrorTextAC
}
export type AuthActionTypes = IActionUnion<typeof AuthActions>

