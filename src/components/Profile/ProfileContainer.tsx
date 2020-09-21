import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    ProfileType,
    getUserProfile,
    updateStatus,
    getStatus
} from "../../redux/reducers/profile-page-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}
type PropsType =
    RouteComponentProps<PathParamsType>
    & MapStateToPropsType
    & {
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (newStatus: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "10984";
            // userId = "12"
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}


let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<any>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)
(ProfileContainer)
