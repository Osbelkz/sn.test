import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {DispatchType} from "../../redux/types";
import {
    followAC,
    setCurrentPageAC,
    setTotalCountUsersAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/reducers/users-reducer";
import {StoreType} from "../../redux/redux-store";
import Users from "./Users";


let mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (newCurrentPage: number) => {
            dispatch(setCurrentPageAC(newCurrentPage))
        },
        setTotalCountOfUsers: (totalCount: number) => {
            dispatch(setTotalCountUsersAC(totalCount))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)

export type UsersContainerPropsType = ConnectedProps<typeof UsersContainer>

export default UsersContainer(Users);
