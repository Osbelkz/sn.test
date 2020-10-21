import React from 'react';
import classes from "./User.module.scss";
import {NavLink} from "react-router-dom";
import userDefaultPhoto from "../../../assets/userDefaultPhoto.png";
import {UserType} from "../../../types/types";

type PropsType = {
    userData: UserType
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
    followingInProgress: Array<string>
}

const User: React.FC<PropsType> = ({userData, followingInProgress, followTC, unfollowTC}) => {
    return (
        <div className={classes.userCard} key={userData.id}>
            <div className={classes.userCard__authorPhoto}>
                <NavLink to={"/profile/" + userData.id}>
                    <img src={userData.photos.small !== null ? userData.photos.small : userDefaultPhoto}
                         alt=""/>
                </NavLink>
                <div>
                    {userData.followed
                        ? <button className={classes.followBtn}
                                  disabled={followingInProgress.some(id => id === userData.id)}
                                  onClick={() => unfollowTC(userData.id)}>{"unfollow"}</button>
                        : <button className={classes.followBtn}
                                  disabled={followingInProgress.some(id => id === userData.id)}
                                  onClick={() => {followTC(userData.id)}}>{"follow"}</button>}
                </div>
            </div>
            <div className={classes.userCard__body}>

                <div>{userData.id}</div>
                <div className={classes.userCard__body_header}>{userData.name}</div>
                <div className={classes.userCard__body_text}>{userData.status}</div>

            </div>
        </div>
    );
};

export default User;
