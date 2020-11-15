import React, {ChangeEvent, useState} from "react";
import classes from './ProfileInfo.module.scss'
import {Preloader} from "../../UI/Preloader/Preloader";
import userDefaultPhoto from "../../../assets/userDefaultPhoto.png";
import ProfilePhotoSVG from "../../../assets/profile_photo/Photo-Profile-Outline.svg"
import {ProfileType} from "../../../types/types";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {UpdateProfileRequestType} from "../../../api/api";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
    updateProfile: (data: UpdateProfileRequestType) => void
    savePhoto: (photo: any) => void
}

const ProfileInfo: React.FC<PropsType> = ({profile, updateStatus, updateProfile, status, isOwner, savePhoto}) => {

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

                {isOwner && <>
                    <label htmlFor="file-upload" className={classes.customFileUpload}>
                        <img src={ProfilePhotoSVG} alt=""/>
                    </label>
                    <input id="file-upload" type="file" onChange={onMainPhotoSelected}/>
                </>}
            </div>
            <div className={classes.profile_info__description}>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateStatus={updateStatus}/>

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

