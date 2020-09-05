import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/reducers/profile-page-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom";


type PathParamsType = {
    userId: string
}
type MapStateToPropsType = {
    profile: ProfileType | null
}
type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & {setUserProfile: (profile: ProfileType) => void}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }


}

let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
