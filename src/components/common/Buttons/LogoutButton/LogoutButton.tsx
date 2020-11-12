import React from 'react';
import classes from './LogoutButton.module.scss';
import login from "./File-Import-Outline.svg"
import logout from "./File-Export-Outline.svg"

interface PropsType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType: "login" | "logout"
}

const LoginButton: React.FC<PropsType> = ({btnType ,...props}) => {

    return (
        <button className={classes.button} {...props}>
            <img className={classes.button__img} src={btnType==="login" ? login : logout} alt=""/>
        </button>
    );
};

export default LoginButton;
