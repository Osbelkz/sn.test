import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {getStatusTC, getUserProfileTC, savePhoto, updateStatusTC} from "../../redux/reducers/actions/profile-actions";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean
}
type PropsType =
    RouteComponentProps<PathParamsType>
    & MapStateToPropsType
    & {
    getUserProfileTC: (userId: string) => void,
    getStatusTC: (userId: string) => void,
    updateStatusTC: (newStatus: string) => void
    savePhoto: (photo: any) => void
}

const ProfileContainer: React.FC<PropsType> = (props) => {

    const refreshProfile = () => {
        let userId = props.match.params.userId;
        if (!userId) {
            // @ts-ignore
            userId = props.authUserId
            if (!userId) {
                props.history.push("/login")
            }
        }
        props.getUserProfileTC(userId)
        props.getStatusTC(userId)
    }
    useEffect(() => {
        refreshProfile()
    }, [props.match.params.userId])


    return (
        <Profile profile={props.profile}
                 isOwner={!props.match.params.userId}
                 status={props.status}
                 savePhoto={props.savePhoto}
                 updateStatus={updateStatusTC}/>
    )
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<any>(
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, savePhoto}),
    withRouter,
)
(ProfileContainer)
