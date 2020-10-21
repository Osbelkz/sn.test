import React from "react";
import classes from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {NavItemsType} from "./NavContainer";

type PropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
    navItems: NavItemsType[]
}

const Nav: React.FC<PropsType> = ({isAuth, login, logoutTC, navItems}) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.loginBlock}>
                {isAuth
                    ? <div>{login} - <button onClick={logoutTC}>Logout</button></div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>

            <div className={classes.nav__items}>
                {navItems.map(navItem => (
                    <NavLink
                        to={navItem.pathTo}
                        key={navItem.id}
                        className={classes.item}
                        activeClassName={classes.active}>
                        <div className={classes.item__icon}>
                            <img src={navItem.icon} alt=""/>
                        </div>
                        <div className={classes.item__name}>
                            {navItem.navName}
                        </div>
                    </NavLink>))}
            </div>
        </nav>
    )
}


export default Nav;
