import React from "react";
import classes from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {NavItemsType} from "./NavContainer";
import LoginNav from "./LoginNav/LoginNav";

type PropsType = {
    navItems: NavItemsType[]
}

const Nav: React.FC<PropsType> = ({navItems}) => {

    return (
        <nav className={classes.nav}>

            <LoginNav />

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
