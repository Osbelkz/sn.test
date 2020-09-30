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

const Login: React.FC<PropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
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
