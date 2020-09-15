import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import userDefaultPhoto from "../../assets/userDefaultPhoto.png";
import classes from "./Users.module.scss";
import {UserType} from "../../redux/reducers/users-reducer";
import { Preloader } from "../UI/Preloader/Preloader";
import { NavLink } from "react-router-dom";

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

function Users(props: UsersTypes) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <Wrapper>
            <div className={classes.usersPage}>
                <div className={classes.pageButton}>
                    {pages.map(p => {
                        return <div onClick={() => props.onPageNumberChanged(p)}
                                    className={props.currentPage === p ? classes.currentPage : classes.page}>
                            {p}
                        </div>
                    })}
                </div>
                {props.isFetching
                    ? <Preloader />
                    : <div>
                    {props.users.map(user => (
                        <div className={classes.userCard} key={user.id}>
                            <div className={classes.userCard__authorPhoto}>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small !== null ? user.photos.small : userDefaultPhoto} alt=""/>
                                </NavLink>
                                <div>
                                    {user.followed
                                        ? <button className={classes.followBtn}
                                                  disabled={props.followingInProgress.some(id=>id === user.id)}
                                                  onClick={() => props.follow(user.id)}>{"unfollow"}</button>
                                        : <button className={classes.followBtn}
                                                  disabled={props.followingInProgress.some(id=>id === user.id)}
                                                  onClick={() => {props.unfollow(user.id)}}>{"follow"}</button>}
                                </div>
                            </div>
                            <div className={classes.userCard__body}>

                                <div className={classes.userCard__body_header}>{user.name}</div>
                                <div className={classes.userCard__body_text}>{user.status}</div>

                            </div>
                        </div>
                    ))}
                    <div className={classes.post}>


                    </div>
                </div>}
            </div>
        </Wrapper>
    )
}

export default Users;
