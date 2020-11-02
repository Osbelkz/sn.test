import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from "../Login.module.scss";
import {Input} from "../../common/FormControls/FormControls";
import {requiredField} from "../../../utils/validators/validators";
import React from "react";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, {captchaUrl: null | string}> & {captchaUrl: null | string}> = (props) => {
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
            {props.captchaUrl && <img src={props.captchaUrl} alt=""/>}
            {props.captchaUrl && <Field placeholder={"Type your password"}
                                        type={"text"}
                                        component={Input}
                                        name={"captcha"}
                                        validate={[requiredField]}/>}
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

export default reduxForm<FormDataType, {captchaUrl: null | string}>({form: "login"})(LoginForm)