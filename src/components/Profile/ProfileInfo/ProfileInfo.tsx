import React from "react";
import classes from './ProfileInfo.module.scss'
import {ProfileType} from "../../../redux/reducers/profile-page-reducer";
import {Preloader} from "../../UI/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/userDefaultPhoto.png";
import ProfileStatus from "./ProfileStatus";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={classes.profile_info}>
            <div className={classes.profile_info__bg_img}/>
            <div className={classes.profile_info__photo}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userDefaultPhoto} alt=""/>
            </div>
            <div className={classes.profile_info__description}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <h3>{props.profile.fullName}</h3>
                <p>{props.profile.aboutMe}</p>
                <p>looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.contacts.facebook}</p>
            </div>
        </div>
    )
}


export default ProfileInfo;
