import React from "react";
import classes from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import {DispatchType, ProfilePageType} from "../../redux/state";

export type PropsType = {
    state: ProfilePageType
    newPostText: string
    dispatch: DispatchType
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper><ProfileInfo/></Wrapper>
            <Wrapper><MyPosts newPostText={props.newPostText}
                              dispatch={props.dispatch}
                              posts={props.state.posts}/></Wrapper>
        </div>
    )
}


export default Profile;
