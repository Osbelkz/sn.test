enum USERS_ACTION_TYPE {
    FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
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

export type UsersActionTypes = FollowActionType | UnfollowActionType | SetUsersActionType

let initialState: UsersStateType = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}
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
