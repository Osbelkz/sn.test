import {ProfilePageActionTypes} from "./profile-page-reducer";
import {SidebarActionTypes} from "./sidebar-reducer";
import {DialogsActionTypes} from "./dialogs-reducer";
import {UsersActionTypes} from "./users-reducer";

export type DispatchType = (action: DispatchActionType) => void

export type DispatchActionType =
    ProfilePageActionTypes
    | SidebarActionTypes
    | DialogsActionTypes
    | UsersActionTypes







