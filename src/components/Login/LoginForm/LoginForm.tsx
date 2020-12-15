import classes from "../Login.module.scss";
import React from "react";
import {useForm} from "react-hook-form";
import {FormInput} from "../../common/FormInput/FormInput";


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type PropsType = {
    onSubmit: (formData: FormDataType) => void
    captchaUrl: string | null
    error: string
}

const LoginForm: React.FC<PropsType> = (props) => {

    const {register, handleSubmit, errors} = useForm<FormDataType>()

    const onSubmit = handleSubmit(({email, password, rememberMe, captcha}) => {
        props.onSubmit({email, password, rememberMe, captcha})
    })
    console.log("login form")
    return (
        <form onSubmit={onSubmit} className={classes.loginForm}>
            <div className={classes.loginForm__field}>
                <FormInput name={"email"}
                       label={"Login"}
                       errorText={errors.email?.message}
                       errorCondition={!!errors.email?.message}
                       ref={register({
                               required: {value: true, message: "required"},
                               pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email"}
                           })}/>
            </div>
            <div className={classes.loginForm__field}>
                <FormInput type={"password"}
                       label={"Password"}
                       name={"password"}
                       errorText={errors.password?.message}
                       errorCondition={!!errors.password?.message}
                       ref={register({
                               required: {value: true, message: "required"},
                               minLength: {value: 7, message: "min length 7"}
                       })}/>

            </div>
            {props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            {props.captchaUrl && <div><img src={props.captchaUrl} alt=""/></div>}
            {props.captchaUrl && <div>
                <FormInput placeholder={"Type captcha"}
                       ref={register({
                           required: {value: true, message: "required"}
                       })}
                       errorText={errors.captcha?.message}
                       errorCondition={!!errors.captcha?.message}
                       name={"captcha"}/>
            </div>}
            <div className={classes.loginForm__rememberMe}>
                <input type={"checkbox"} name={"rememberMe"} ref={register}/>
                <label htmlFor={"rememberMe"}>remember me</label>
            </div>
            <div>
                <button type={"submit"} className={classes.loginForm__button}>Login</button>
            </div>
        </form>
    );
};

export default LoginForm
