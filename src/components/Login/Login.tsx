import React from 'react';
import classes from "./Login.module.scss";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";
import {loginTC} from '../../redux/reducers/actions/auth-actions';
import LoginForm, { FormDataType } from './LoginForm/LoginForm';


type PropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login: React.FC<PropsType> = ({loginTC, isAuth}) => {

    const onSubmit = (formData: FormDataType) => {
        loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginWrapper}>
                <h2>Login</h2>
                <LoginForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootStateType)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);
