import {ACTIONS_TYPE, AuthActionTypes} from "./actions/auth-actions";

let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}
export type AuthStateType = typeof initialState;

export const authReducer = (state = initialState, action: AuthActionTypes): AuthStateType  => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_AUTH_USER_DATA:
        case ACTIONS_TYPE.GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}


