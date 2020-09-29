import {ProfilePageActionTypes} from "./reducers/profile-page-reducer";
import {DialogsActionTypes} from "./reducers/dialogs-reducer";
import {UsersActionTypes} from "./reducers/users-reducer";
import {AuthActionTypes} from "./reducers/auth-reducer";

export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType =
    ProfilePageActionTypes
    | DialogsActionTypes
    | UsersActionTypes
    | AuthActionTypes







