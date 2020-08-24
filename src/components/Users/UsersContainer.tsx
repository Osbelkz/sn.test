import React from "react";
import {connect, ConnectedProps} from "react-redux";
import Users from "./Users";
import {DispatchType} from "../../redux/types";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/reducers/users-reducer";
import {StoreType} from "../../redux/redux-store";


let mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
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
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)

export type UsersContainerPropsType = ConnectedProps<typeof UsersContainer>

export default UsersContainer(Users);
