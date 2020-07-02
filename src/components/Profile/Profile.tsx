import React from "react";
import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo/></Wrapper>
            <Wrapper><MyPosts/></Wrapper>

        </div>
    )
}


export default Profile;
