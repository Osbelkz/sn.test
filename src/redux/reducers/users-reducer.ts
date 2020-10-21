import {ACTIONS_TYPE, UsersActionTypes} from "./actions/users-actions";
import {UserType} from "../../types/types";
import {updateObjectInArray} from "../../utils/objects-helpers";

export type UsersStateType = typeof initialState;


let initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [] as string[]
}

export const usersReducer = (state = initialState, action: UsersActionTypes): UsersStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, "id", {followed: true})
            }
        }
        case ACTIONS_TYPE.UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, "id", {followed: false})
            }
        }
        case ACTIONS_TYPE.SET_USERS: {
            return {...state, users: [...action.payload.users]}
        }

        case ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, ...action.payload}
        }
        case ACTIONS_TYPE.SET_TOTAL_COUNT: {
            return {...state, ...action.payload}
        }
        case ACTIONS_TYPE.TOGGLE_IS_FETCHING: {
            return {...state, ...action.payload}
        }
        case ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default:
            return state;
    }
}

