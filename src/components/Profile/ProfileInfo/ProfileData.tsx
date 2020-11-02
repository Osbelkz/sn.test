import {ProfileType} from "../../../types/types";
import React from "react";
import Contact from "./Contact";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, activateEditMode}) => {
    return (
        <>
            {isOwner && <button onClick={activateEditMode}>Edit</button>}
            <h3>{profile.fullName}</h3>
            <p>{profile.aboutMe}</p>
            <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            <p>{profile.lookingForAJobDescription}</p>
            <div>
                <div>Contacts:</div>
                {Object.keys(profile.contacts).map((k: string) =>
                    <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]}/>
                )}
            </div>
            <p>{profile.contacts.facebook}</p>
        </>
    );
};

export default ProfileData
