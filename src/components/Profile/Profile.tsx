import React from "react";
import classes from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileType } from "../../types/types";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/></Wrapper>
            <Wrapper><MyPostsContainer/></Wrapper>
        </div>
    )
}


export default Profile;
