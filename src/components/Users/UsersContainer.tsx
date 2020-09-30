import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import Users from "./Users";
import { getUsersTC, unfollowTC, followTC } from "../../redux/reducers/actions/users-actions";
import { UserType } from "../../types/types";

type PropsType = MatStateToPropsType & {
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageNumberChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users {...this.props} onPageNumberChanged={this.onPageNumberChanged}/>
    }
}

type MatStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount:number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

let mapStateToProps = (state: RootStateType): MatStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: DispatchType) => {
//     return {
//         follow: followAC,
//         unfollow: unfollowAC,
//         setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         setTotalCountOfUsers: setTotalCountUsersAC,
//         toggleIsFetching: toggleIsFetchingAC
//     }
// }

export default connect(mapStateToProps,
    {
        followTC, unfollowTC, getUsersTC
    })(UsersContainer)

