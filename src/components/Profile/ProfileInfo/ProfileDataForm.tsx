import {ProfileType} from "../../../types/types";
import React from "react";
import {FormInput} from "../../common/FormInput/FormInput";
import {UpdateProfileRequestType} from "../../../api/api";
import {useForm} from "react-hook-form";


type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner: boolean
    deactivateEditMode: () => void
    onSubmit: (data: UpdateProfileRequestType) => void
}

type UpdateProfileFormType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile, isOwner, deactivateEditMode, onSubmit}) => {

    const {register, handleSubmit, errors} = useForm<UpdateProfileFormType>({
        defaultValues: {
            fullName: profile.fullName,
            aboutMe: profile.aboutMe as string,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription as string,
            facebook: profile.contacts.facebook,
            instagram: profile.contacts.instagram,
            twitter: profile.contacts.twitter,
            website: profile.contacts.website,
            youtube: profile.contacts.youtube,
            mainLink: profile.contacts.mainLink,
            vk: profile.contacts.vk,
        }
    })

    const submitForm = handleSubmit(({
                                         facebook = null,
                                         instagram = null,
                                         mainLink = null,
                                         twitter = null,
                                         vk = null,
                                         website = null,
                                         youtube = null,
                                         lookingForAJobDescription = null,
                                         lookingForAJob,
                                         fullName,
                                         aboutMe = null
                                     }) => {
        onSubmit({fullName, aboutMe, lookingForAJob, lookingForAJobDescription, userId: profile.userId,
            contacts: {facebook, instagram, mainLink, twitter, vk, website, youtube}
        })
        deactivateEditMode()
    })

    return (
        <form onSubmit={submitForm}>
            <FormInput name={"fullName"}
                       label={"full name"}
                       errorCondition={!!errors.fullName}
                       errorText={errors.fullName?.message}
                       ref={register({required: {value: true, message: "required"}})}/>
            <FormInput name={"aboutMe"} label={"about me"} ref={register}/>
            <input name={"lookingForAJob"} type={"checkbox"} ref={register}/>
            <FormInput name={"lookingForAJobDescription"} label={"lookingForAJobDescription"} ref={register}/>
            <div>
                <div>Contacts:</div>
                {Object.keys(profile.contacts).map((k: string) => <FormInput key={k}
                                                                             name={k}
                                                                             label={k}
                                                                             ref={register}/>)}
            </div>
            <button type={"submit"}>Save</button>
        </form>
    );
};


export default ProfileDataForm
