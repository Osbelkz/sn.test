import React from 'react';
import classes from "./Login.module.scss";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";
import {loginTC} from '../../redux/reducers/actions/auth-actions';
import LoginForm, { FormDataType } from './LoginForm/LoginForm';


type PropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    captchaUrl: null | string
}

const Login: React.FC<PropsType> = ({loginTC, isAuth, captchaUrl}) => {

    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginWrapper}>
                <h2>Login</h2>
                <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootStateType)=>({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);
