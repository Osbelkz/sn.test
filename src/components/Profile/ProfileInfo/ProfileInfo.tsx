import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.scss'
import {Preloader} from "../../UI/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/userDefaultPhoto.png";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../types/types";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {UpdateProfileRequestType} from "../../../api/api";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
    updateProfile: (data: UpdateProfileRequestType) => void
    savePhoto: (photo: any) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, updateStatus, updateProfile,  status, isOwner, savePhoto}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.profile_info}>
            <div className={classes.profile_info__bg_img}/>
            <div className={classes.profile_info__photo}>
                <img src={profile.photos.large ? profile.photos.large : userDefaultPhoto} alt=""/>
            </div>
            <div className={classes.profile_info__description}>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileDataForm profile={profile}
                                       isOwner={isOwner}
                                       onSubmit={updateProfile}
                                       deactivateEditMode={() => setEditMode(false)}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   activateEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    )
}


export default ProfileInfo;

