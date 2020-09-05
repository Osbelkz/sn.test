import {act} from "react-dom/test-utils";

enum USERS_ACTION_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS",
}

export interface UserType {
    id: string
    name: string
    followed: boolean
    status: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
}

export interface UsersStateType {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean,
    followingInProgress: Array<string>
}

interface FollowActionType {
    type: USERS_ACTION_TYPE.FOLLOW
    userId: string
}

interface UnfollowActionType {
    type: USERS_ACTION_TYPE.UNFOLLOW
    userId: string
}

interface SetUsersActionType {
    type: USERS_ACTION_TYPE.SET_USERS
    users: Array<UserType>
}

interface SetCurrentPageActionType {
    type: USERS_ACTION_TYPE.SET_CURRENT_PAGE
    newCurrentPage: number
}

interface SetTotalCountOfUsersActionType {
    type: USERS_ACTION_TYPE.SET_TOTAL_COUNT
    totalCount: number
}

interface FollowingIsFetchingActionType {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: string
}

interface ToggleIsFetchingActionType {
    type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type UsersActionTypes = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountOfUsersActionType
    | ToggleIsFetchingActionType
    | FollowingIsFetchingActionType

let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: UsersActionTypes) => {
    switch (action.type) {
        case USERS_ACTION_TYPE.FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                    ? {...user, followed: true}
                    : user)
            }
        }
        case USERS_ACTION_TYPE.UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId
                    ? {...user, followed: false}
                    : user)
            }
        }
        case USERS_ACTION_TYPE.SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case USERS_ACTION_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.newCurrentPage}
        }
        case USERS_ACTION_TYPE.SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case USERS_ACTION_TYPE.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !=action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId: string): FollowActionType => {
    return {type: USERS_ACTION_TYPE.FOLLOW, userId}
}
export const unfollow = (userId: string): UnfollowActionType => {
    return {type: USERS_ACTION_TYPE.UNFOLLOW, userId}
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => {
    return {type: USERS_ACTION_TYPE.SET_USERS, users}
}
export const setCurrentPage = (newCurrentPage: number): SetCurrentPageActionType => {
    return {type: USERS_ACTION_TYPE.SET_CURRENT_PAGE, newCurrentPage}
}
export const setTotalCountOfUsers = (totalCount: number): SetTotalCountOfUsersActionType => {
    return {type: USERS_ACTION_TYPE.SET_TOTAL_COUNT, totalCount}
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {type: USERS_ACTION_TYPE.TOGGLE_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFetching: boolean,  userId: string): FollowingIsFetchingActionType => {
    return {type: USERS_ACTION_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId}
}
