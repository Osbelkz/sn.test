import React from "react";
import logo from "../../assets/logo.png";
import classes from './Header.module.scss'


function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt=""/>
        </header>
    )
}


export default Header;
