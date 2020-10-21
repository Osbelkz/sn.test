import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import Users from "./Users";
import { getUsersTC, unfollowTC, followTC } from "../../redux/reducers/actions/users-actions";
import { UserType } from "../../types/types";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/reducers/selectors/users-selector";

type PropsType = MatStateToPropsType & {
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {pageSize, currentPage} = this.props
        this.props.getUsersTC(currentPage, pageSize)
    }

    onPageNumberChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsersTC(pageNumber, pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default connect(mapStateToProps,
    {
        followTC, unfollowTC, getUsersTC
    })(UsersContainer)

