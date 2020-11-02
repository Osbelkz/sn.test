import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import Users from "./Users";
import {getUsersTC, unfollowTC, followTC} from "../../redux/reducers/actions/users-actions";
import {UsersStateType} from "../../redux/reducers/users-reducer";


const UsersContainer: React.FC = () => {

    const dispatch = useDispatch()
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followingInProgress
    } = useSelector<RootStateType, UsersStateType>(state => state.usersPage)

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [pageSize, currentPage])


    const onPageNumberChanged = useCallback((pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    },[pageSize])

    const followHandler = useCallback((userId: string) => {
        dispatch(followTC(userId))
    }, [])
    const unfollowHandler = useCallback((userId: string) => {
        dispatch(unfollowTC(userId))
    }, [])

    return <Users onPageNumberChanged={onPageNumberChanged}
                  followingInProgress={followingInProgress}
                  currentPage={currentPage}
                  isFetching={isFetching}
                  totalUsersCount={totalUsersCount}
                  users={users}
                  pageSize={pageSize}
                  follow={followHandler}
                  unfollow={unfollowHandler}/>
}

export default UsersContainer

