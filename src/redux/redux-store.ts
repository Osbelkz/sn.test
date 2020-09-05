import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./reducers/profile-page-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {DispatchActionType} from "./types";
import {authReducer} from "./reducers/auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

export type StoreType = ReturnType<typeof reducers>

let store: Store<StoreType, DispatchActionType> = createStore(reducers);

export default store;


// @ts-ignore
window.store = store
