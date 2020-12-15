import {ProfileType} from "../../../../types/types";
import React from "react";
import Contact from "../Contact/Contact";
import classes from "./ProfileData.module.scss";
import Button from "../../../common/Buttons/Button/Button";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, activateEditMode}) => {
    return (
        <div className={classes.profile_data}>
            <h3>{profile.fullName}</h3>
            {profile.aboutMe && <p><b>About me: </b>{profile.aboutMe}</p>}
            <p><b>Looking for a job: </b>{profile.lookingForAJob ? "yes" : "no"}</p>
            {profile.lookingForAJobDescription && <p><b>Desription: </b>{profile.lookingForAJobDescription}</p>}
            {isOwner && <Button onClick={activateEditMode}>Edit profile</Button>}
            <div className={classes.social_links}>
                {Object.keys(profile.contacts).map((k) => {
                        let contactValue = profile.contacts[k]
                        if (profile.contacts[k]) {
                            if (!profile.contacts[k]?.includes("https://")) {
                                contactValue = `https://${profile.contacts[k]}`
                            }
                            return <Contact key={k} contactTitle={k} contactValue={contactValue as string}/>
                        }
                    }
                )}
            </div>
        </div>
    );
};

export default ProfileData
