import React, {useCallback} from 'react';
import classes from "./LoginNav.module.scss";
import LoginButton from "../../common/Buttons/LogoutButton/LogoutButton";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {AuthStateType} from "../../../redux/reducers/auth-reducer";
import {logoutTC} from "../../../redux/reducers/actions/auth-actions";

const LoginNav = () => {

    const dispatch = useDispatch()
    const {isAuth, login} = useSelector<RootStateType, AuthStateType>(state => state.auth)

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    return (
        <div className={classes.login__info}>
            {isAuth
                ? <>
                    <div>{login}</div>
                    <LoginButton btnType={"logout"} onClick={logoutHandler}>Logout</LoginButton>
                </>
                : <>
                    <div>Login</div>
                    <LoginButton btnType={"login"}>
                        <NavLink className={classes.login} to={"/login"}/>
                    </LoginButton>
                </>}
        </div>
    );
};

export default LoginNav;
