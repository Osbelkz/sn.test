import React, {useCallback} from 'react';
import classes from "./Login.module.scss";
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";
import {loginTC} from '../../redux/reducers/actions/auth-actions';
import LoginForm, { FormDataType } from './LoginForm/LoginForm';
import {AuthStateType} from "../../redux/reducers/auth-reducer";


const Login: React.FC = () => {

    const dispatch = useDispatch()
    const {isAuth, captchaUrl, error} = useSelector<RootStateType, AuthStateType>(state => state.auth)

    const onSubmit = useCallback((formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }, [])

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginWrapper}>
                <h2>Login</h2>
                <LoginForm error={error} captchaUrl={captchaUrl} onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Login;
