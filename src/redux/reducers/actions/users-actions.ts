//              Users ACTIONS
//
//
//
//
//


import {DispatchType, UserType} from "../../../types/types";
import {usersAPI} from "../../../api/api";

export enum ACTIONS_TYPE {
    FOLLOW = "Users/FOLLOW",
    UNFOLLOW = "Users/UNFOLLOW",
    SET_USERS = "Users/SET_USERS",
    SET_CURRENT_PAGE = "Users/SET_CURRENT_PAGE",
    SET_TOTAL_COUNT = "Users/SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "Users/TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "Users/TOGGLE_IS_FOLLOWING_PROGRESS",
}

const makeAction = <T extends ACTIONS_TYPE, P>(type: T) => (payload: P) => ({type, payload})

interface IStringMap<T> {
    [key: string]: T
}

type IAnyFunction = (...args: any[]) => any;

type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;


export type SetFollowPayloadType = {
    userId: string
}
export const setFollowAC = makeAction<ACTIONS_TYPE.FOLLOW, SetFollowPayloadType>(ACTIONS_TYPE.FOLLOW)

export const setUnfollowAC = makeAction<ACTIONS_TYPE.UNFOLLOW, SetFollowPayloadType>(ACTIONS_TYPE.UNFOLLOW)

export type SetUsersPayloadType = {
    users: Array<UserType>
}
export const setUsersAC = makeAction<ACTIONS_TYPE.SET_USERS, SetUsersPayloadType>(ACTIONS_TYPE.SET_USERS)

export type SetCurrentPagePayloadType = {
    currentPage: number
}
export const setCurrentPageAC = makeAction<ACTIONS_TYPE.SET_CURRENT_PAGE, SetCurrentPagePayloadType>(ACTIONS_TYPE.SET_CURRENT_PAGE)

export type SetTotalCountOfUsersPayloadType = {
    totalUsersCount: number
}
export const setTotalCountOfUsersAC = makeAction<ACTIONS_TYPE.SET_TOTAL_COUNT, SetTotalCountOfUsersPayloadType>(ACTIONS_TYPE.SET_TOTAL_COUNT)

export type toggleIsFetchingPayloadType = {
    isFetching: boolean
}
export const toggleIsFetchingAC = makeAction<ACTIONS_TYPE.TOGGLE_IS_FETCHING, toggleIsFetchingPayloadType>(ACTIONS_TYPE.TOGGLE_IS_FETCHING)

export type toggleFollowingProgressPayloadType = {
    isFetching: boolean
    userId: string
}
export const toggleFollowingProgressAC = makeAction<ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS, toggleFollowingProgressPayloadType>(ACTIONS_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS)


//              Users THUNKS
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: DispatchType) => {

    dispatch(toggleIsFetchingAC({isFetching: true}))
    dispatch(setCurrentPageAC({currentPage}))

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetchingAC({isFetching: false}))
            dispatch(setUsersAC({users: data.items}))
            dispatch(setTotalCountOfUsersAC({totalUsersCount: data.totalCount}))

        });
}

export const followTC = (userId: string) => (dispatch: DispatchType) => {

    dispatch(toggleFollowingProgressAC({isFetching: true, userId}))
    usersAPI.follow(userId)
        .then((resultCode: number) => {
            if (resultCode === 0) {
                dispatch(setFollowAC({userId}))
            }
            dispatch(toggleFollowingProgressAC({isFetching: false, userId}))
        })
}

export const unfollowTC = (userId: string) => (dispatch: DispatchType) => {

    dispatch(toggleFollowingProgressAC({isFetching: true, userId}))
    usersAPI.unfollow(userId)
        .then(resultCode => {
            if (resultCode === 0) {
                dispatch(setUnfollowAC({userId}))
            }
            dispatch(toggleFollowingProgressAC({isFetching: false, userId}))
        })
}

const UsersActions = {
    setFollowAC,
    toggleFollowingProgressAC,
    toggleIsFetchingAC,
    setTotalCountOfUsersAC,
    setCurrentPageAC,
    setUsersAC,
    setUnfollowAC
}
export type UsersActionTypes = IActionUnion<typeof UsersActions>
