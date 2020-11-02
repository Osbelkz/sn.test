import React from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {useSelector} from "react-redux";


const RedirectComponent: React.FC = ({children}) => {


    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    if (!isAuth) return <Redirect to={"/login"}/>

    return <>{children}</>
}

export default RedirectComponent;

