import React from "react";
import classes from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/reducers/profile-page-reducer";

export type PropsType = {
    profile: ProfileType | null
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo profile={props.profile}/></Wrapper>
            <Wrapper><MyPostsContainer/></Wrapper>
        </div>
    )
}


export default Profile;
