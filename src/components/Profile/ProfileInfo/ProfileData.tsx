import {ProfileType} from "../../../types/types";
import React from "react";
import Contact from "./Contact/Contact";
import classes from "./ProfileData.module.scss";
import Button from "../../common/Buttons/Button/Button";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, activateEditMode}) => {
    return (
        <>
            <h3>{profile.fullName}{isOwner && <Button onClick={activateEditMode}>Edit profile</Button>}</h3>
            <p>{profile.aboutMe}</p>
            <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            <p>{profile.lookingForAJobDescription}</p>
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
        </>
    );
};

export default ProfileData
