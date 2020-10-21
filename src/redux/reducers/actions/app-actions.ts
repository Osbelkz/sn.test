//              Auth ACTIONS
//
//
//
//
//

import {Dispatch} from "redux";
import {RootStateType} from "../../redux-store";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../app-reducer";
import {getAuthUserDataTC} from "./auth-actions";

export enum ACTIONS_TYPE {
    SET_INITIALIZED_SUCCESS = "App/SET_INITIALIZED_SUCCESS",
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;


// export const setInitializedSuccessAC = makeAction<ACTIONS_TYPE.SET_INITIALIZED_SUCCESS,>(ACTIONS_TYPE.SET_INITIALIZED_SUCCESS)
export const setInitializedSuccessAC = () => ({type: ACTIONS_TYPE.SET_INITIALIZED_SUCCESS})
//Auth THUNKS
type GetStateType = () => RootStateType
type DispatchType = Dispatch<AppActionTypes>
type ThunkType = ThunkAction<void, RootStateType, unknown, AppActionTypes>

export const initializeAppTC = (): ThunkType => (dispatch) => {
    // @ts-ignore
    let promise: Promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitializedSuccessAC())
        })
}


const AppActions = {
    setInitializedAC: setInitializedSuccessAC
}
export type AppActionTypes = IActionUnion<typeof AppActions>

