enum USERS_ACTION_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
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

export type UsersActionTypes = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalCountOfUsersActionType

let initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 2
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
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowActionType => {
    return {type: USERS_ACTION_TYPE.FOLLOW, userId}
}
export const unfollowAC = (userId: string): UnfollowActionType => {
    return {type: USERS_ACTION_TYPE.UNFOLLOW, userId}
}
export const setUsersAC = (users: Array<UserType>): SetUsersActionType => {
    return {type: USERS_ACTION_TYPE.SET_USERS, users}
}
export const setCurrentPageAC = (newCurrentPage: number): SetCurrentPageActionType => {
    return {type: USERS_ACTION_TYPE.SET_CURRENT_PAGE, newCurrentPage}
}
export const setTotalCountUsersAC = (totalCount: number): SetTotalCountOfUsersActionType => {
    return {type: USERS_ACTION_TYPE.SET_TOTAL_COUNT, totalCount }
}
