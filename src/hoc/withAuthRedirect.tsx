import React from "react";
import {Redirect} from "react-router-dom";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state: StoreType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export const withAuthRedirect = (Component: React.ComponentType) => {

    class RedirectComponent extends React.Component<{isAuth: boolean}> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"} />

            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}
