import {combineReducers} from "redux";
import {profileReducer} from "./reducers/profile-page-reducer";
import {dialogsReducer} from "./reducers/dialogs-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer} from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./reducers/app-reducer";
import {configureStore} from "@reduxjs/toolkit";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

let store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export default store;


// @ts-ignore
window.store = store
