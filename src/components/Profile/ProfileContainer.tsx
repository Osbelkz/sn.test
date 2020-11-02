import React, {useCallback, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {useHistory, useParams} from "react-router-dom";
import {getStatusTC, getUserProfileTC, savePhotoTC, updateStatusTC} from "../../redux/reducers/actions/profile-actions";
import {ProfilePageStateType} from "../../redux/reducers/profile-page-reducer";
import {AuthStateType} from "../../redux/reducers/auth-reducer";


const ProfileContainer: React.FC = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    let {userId} = useParams<{userId: string}>()
    const {profile, status} = useSelector<RootStateType, ProfilePageStateType>(state => state.profilePage)
    const {id: authUserId} = useSelector<RootStateType, AuthStateType>(state => state.auth)


    useEffect(() => {
        if (!userId) {
            // @ts-ignore
            userId = authUserId
            if (!userId) {
                history.push("/login")
            }
        }
        dispatch(getUserProfileTC(userId))
        dispatch(getStatusTC(userId))
    }, [userId])

    const savePhotoHandler = useCallback((photo: any) => {
        dispatch(savePhotoTC(photo))
    }, [])
    const updateStatusHandler = useCallback((newStatus: string) => {
        dispatch(updateStatusTC(newStatus))
    }, [])

    return (
        <Profile profile={profile}
                 isOwner={!userId}
                 status={status}
                 savePhoto={savePhotoHandler}
                 updateStatus={updateStatusHandler}/>
    )
}



export default ProfileContainer
