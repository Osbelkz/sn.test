import {ProfileType} from "../../../../types/types";
import React from "react";
import {FormInput} from "../../../common/FormInput/FormInput";
import {UpdateProfileRequestType} from "../../../../api/api";
import {useForm} from "react-hook-form";
import classes from "./ProfileDataForm.module.scss";
import Button from "../../../common/Buttons/Button/Button";


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
        onSubmit({
            fullName, aboutMe, lookingForAJob, lookingForAJobDescription, userId: profile.userId,
            contacts: {facebook, instagram, mainLink, twitter, vk, website, youtube}
        })
        deactivateEditMode()
    })

    return (
        <form className={classes.profileDataForm} onSubmit={submitForm}>
            <div className={classes.container}>
                <table>
                    <caption>
                        <h4>Info</h4>
                    </caption>
                    <tbody>
                    <tr>
                        <th style={{textAlign: "right", paddingRight: "10px"}}>
                            {"full name"}
                        </th>
                        <td>
                            <FormInput name={"fullName"}
                                       errorCondition={!!errors.fullName}
                                       errorText={errors.fullName?.message}
                                       ref={register({required: {value: true, message: "required"}})}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: "right", paddingRight: "10px"}}>
                            {"about me"}
                        </th>
                        <td>
                            <FormInput name={"aboutMe"} ref={register}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: "right", paddingRight: "10px"}}>
                            {"looking for a job"}
                        </th>
                        <td style={{textAlign: "left"}}>
                            <input name={"lookingForAJob"} type={"checkbox"} ref={register}/>
                        </td>
                    </tr>
                    <tr>
                        <th style={{textAlign: "right", paddingRight: "10px"}}>
                            {"description:"}
                        </th>
                        <td>
                            <FormInput name={"lookingForAJobDescription"} ref={register}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <caption>
                        <h4>Contacts</h4>
                    </caption>
                    <tbody>
                    {Object.keys(profile.contacts).map((k: string) => <tr>
                        <th style={{textAlign: "right", paddingRight: "10px"}}>{k + ":"}</th>
                        <td><FormInput key={k}
                                       name={k}
                                       ref={register}/></td>
                    </tr>)}
                    </tbody>

                </table>
            </div>
            <Button type={"submit"}>Save</Button>
            <Button onClick={deactivateEditMode}>Cancel</Button>
        </form>
    );
};


export default ProfileDataForm
