import {ACTIONS_TYPE, AppActionTypes} from "./actions/app-actions";

let initialState = {
    initialized: false as boolean,

}
export type AppStateType = typeof initialState;

export const appReducer = (state = initialState, action: AppActionTypes): AppStateType  => {

    switch (action.type) {
        case ACTIONS_TYPE.SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}


