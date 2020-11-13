import React from "react";
import classes from './Profile.module.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Wrapper from "../Wrapper/Wrapper";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import {UpdateProfileRequestType} from "../../api/api";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
    updateProfile: (data: UpdateProfileRequestType) => void
    isOwner: boolean
    savePhoto: (photo: any) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.profile}>
            <Wrapper>
                <ProfileInfo savePhoto={props.savePhoto}
                             isOwner={props.isOwner}
                             profile={props.profile}
                             status={props.status}
                             updateProfile={props.updateProfile}
                             updateStatus={props.updateStatus}/>
            </Wrapper>
            <Wrapper><MyPostsContainer/></Wrapper>
        </div>
    )
}


export default Profile;
