import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-page-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
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
