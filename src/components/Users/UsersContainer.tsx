import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCountOfUsers,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/reducers/users-reducer";
import {StoreType} from "../../redux/redux-store";
import Users from "./Users";
import {usersAPI} from "../../api/api";

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>
    setTotalCountOfUsers: (totalCount: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (newCurrentPage: number) => void,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean)=>void
    toggleFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: Array<string>
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalCountOfUsers(data.totalCount)
        });
    }

    onPageNumberChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
                      onPageNumberChanged={this.onPageNumberChanged}
        />
    }
}


let mapStateToProps = (state: StoreType) => {
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
    {follow, unfollow, setUsers, setCurrentPage, setTotalCountOfUsers, toggleIsFetching, toggleFollowingProgress})(UsersContainer)

