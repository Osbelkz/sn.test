import {ProfilePageActionTypes} from "./reducers/profile-page-reducer";
import {SidebarActionTypes} from "./reducers/sidebar-reducer";
import {DialogsActionTypes} from "./reducers/dialogs-reducer";
import {UsersActionTypes} from "./reducers/users-reducer";

export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType =
    ProfilePageActionTypes
    | SidebarActionTypes
    | DialogsActionTypes
    | UsersActionTypes







