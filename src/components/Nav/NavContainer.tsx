import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import Nav from "./Nav";
import {getAuthUserData} from "../../redux/reducers/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type RootPropsType = MapStatePropsType & { getAuthUserData: () => void }

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

const mapStateToProps = (state: StoreType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(NavContainer);
