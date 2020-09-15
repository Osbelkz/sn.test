import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {ProfileType, getUserProfile} from "../../redux/reducers/profile-page-reducer";
import {withRouter, RouteComponentProps, Redirect} from "react-router-dom";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {getUserProfile: (userId: string) => void}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={"/login"} />

        return (
            <Profile profile={this.props.profile}/>
        )
    }


}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);
