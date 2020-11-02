import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import classes from "./Users.module.scss";
import {Preloader} from "../UI/Preloader/Preloader";
import {UserType} from "../../types/types";
import Pagination from "../common/Pagination/Pagination";
import User from "./User/User";

type UsersTypes = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageNumberChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    isFetching: boolean
    followingInProgress: Array<string>
}

const Users: React.FC<UsersTypes> = ({unfollow, follow, followingInProgress, onPageNumberChanged,
                   pageSize, totalUsersCount, currentPage, isFetching, users}) => {
    return (
        <Wrapper>
            <div className={classes.usersPage}>
                <div className={classes.pageButton}>
                    <Pagination currentPage={currentPage}
                                itemsOnPage={pageSize}
                                totalItems={totalUsersCount}
                                changePageNumber={onPageNumberChanged}/>

                </div>
                {isFetching
                    ? <Preloader/>
                    : <div>
                        {users.map(user => (
                            <User userData={user}
                                  key={user.id}
                                  follow={follow}
                                  unfollow={unfollow}
                                  followingInProgress={followingInProgress}
                            />
                        ))}
                        <div className={classes.pageButton}>
                            <Pagination currentPage={currentPage}
                                        itemsOnPage={pageSize}
                                        totalItems={totalUsersCount}
                                        changePageNumber={onPageNumberChanged}/>

                        </div>
                    </div>}
            </div>
        </Wrapper>
    )
}

export default Users;
