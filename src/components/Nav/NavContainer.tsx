import React from 'react';
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import Nav from "./Nav";
import {getAuthUserDataTC, logoutTC} from "../../redux/reducers/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

type RootPropsType = MapStatePropsType & MapDispatchToPropsType

class NavContainer extends React.Component<RootPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Nav {...this.props}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData: getAuthUserDataTC, logout: logoutTC})(NavContainer);
