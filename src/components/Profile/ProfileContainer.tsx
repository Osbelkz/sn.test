import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";
import { ProfileType } from "../../types/types";
import {getStatusTC, getUserProfileTC, updateStatusTC} from "../../redux/reducers/actions/profile-actions";
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
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            if (this.props.authUserId) {
                userId = this.props.authUserId.toString() || "10985";
            }
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}/>
        )
    }
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
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
)
(ProfileContainer)
