import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./reducers/profile-page-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {sidebarReducer} from "./reducers/sidebar-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {DispatchActionType} from "./types";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type StoreType = ReturnType<typeof reducers>

let store: Store<StoreType, DispatchActionType> = createStore(reducers);

export default store;
