import {ProfileType} from "../../../types/types";
import React from "react";
import Contact from "./Contact";
import {Input} from "../../common/FormControls/FormControls";
import reduxForm from "redux-form";

type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner: boolean
    diactivateEditMode: () => void
}
const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile, isOwner, diactivateEditMode}) => {
    return (
        <>
            {isOwner && <button onClick={diactivateEditMode}>Edit</button>}
            <div>
                <b>Full name</b>: <Input/>
            </div>
            <div></div>
            <p>{profile.aboutMe}</p>
            <p>looking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
            <p>{profile.lookingForAJobDescription}</p>
            <div>
{/*                <div>Contacts:</div>
                {Object.keys(profile.contacts).map((k: string) =>
                    <Contact key={k} contactTitle={k} contactValue={profile.contacts[k]}/>
                )}*/}
            </div>
            <p>{profile.contacts.facebook}</p>
        </>
    );
};


export default ProfileDataForm
