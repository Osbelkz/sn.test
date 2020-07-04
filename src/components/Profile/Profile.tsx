import React from "react";
import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import {ProfilePageType} from "../../redux/state";

export type PropsType = {
    state: ProfilePageType
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo/></Wrapper>
            <Wrapper><MyPosts posts={props.state.posts}/></Wrapper>

        </div>
    )
}


export default Profile;
