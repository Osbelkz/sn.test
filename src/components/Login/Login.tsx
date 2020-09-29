import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from '../common/FormControls/FormControls';
import {requiredField} from "../../utils/validators/validators";
import classes from "./Login.module.scss";
import { connect } from 'react-redux';
import {loginTC, logoutTC} from '../../redux/reducers/auth-reducer';
import { Redirect } from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
            <div className={classes.loginForm__field}>
                <Field placeholder={"Type your username"} component={Input} name={"email"} validate={[requiredField]} />
            </div>
            <div className={classes.loginForm__field}>
                <Field placeholder={"Type your password"} type={"password"} component={Input} name={"password"} validate={[requiredField]}/>
            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}

            <div>
                <button className={classes.loginForm__button}>Login</button>
            </div>
            <div className={classes.loginForm__rememberMe}>
                <Field type={"checkbox"} component={Input} name={"rememberMe"} />
                <span>remember me</span>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login",
})(LoginForm)

type PropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: ()=>void
    isAuth: boolean
}

const Login: React.FC<PropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.loginWrapper}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootStateType)=>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login: loginTC, logout: logoutTC})(Login);
