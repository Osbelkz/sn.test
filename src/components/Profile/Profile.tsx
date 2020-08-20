import React from "react";
import classes from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type PropsType = {
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo/></Wrapper>
            <Wrapper><MyPostsContainer/></Wrapper>
        </div>
    )
}


export default Profile;
