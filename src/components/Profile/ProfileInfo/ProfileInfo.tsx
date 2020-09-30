import React from "react";
import classes from './ProfileInfo.module.scss'
import {Preloader} from "../../UI/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/userDefaultPhoto.png";
import ProfileStatus from "./ProfileStatus";
import { ProfileType } from "../../../types/types";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, updateStatus, status}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile_info}>
            <div className={classes.profile_info__bg_img}/>
            <div className={classes.profile_info__photo}>
                <img src={profile.photos.large ? profile.photos.large : userDefaultPhoto} alt=""/>
            </div>
            <div className={classes.profile_info__description}>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
                <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
                <p>{profile.lookingForAJobDescription}</p>
                <p>{profile.contacts.facebook}</p>
            </div>
        </div>
    )
}


export default ProfileInfo;
