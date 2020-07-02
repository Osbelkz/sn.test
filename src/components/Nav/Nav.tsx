import React from "react";
import classes from './Nav.module.scss'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <NavLink to="/profile"  className={classes.item} activeClassName={classes.active}>PROFILE</NavLink>
            <NavLink to="/messages" className={classes.item} activeClassName={classes.active}>MESSAGES</NavLink>
            <NavLink to="/news" className={classes.item} activeClassName={classes.active}>NEWS</NavLink>
            <NavLink to="/music" className={classes.item} activeClassName={classes.active}>MUSIC</NavLink>
            <NavLink to="/settings" className={classes.item} activeClassName={classes.active}>SETTINGS</NavLink>
        </nav>
    )
}


export default Nav;
