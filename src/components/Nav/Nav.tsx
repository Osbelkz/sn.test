import React, {useEffect} from "react";
import classes from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import Chat from './../../assets/nav/Chat-Outline.svg'
import Profile from './../../assets/nav/Profile-Outline.svg'
import Music from './../../assets/nav/Play-Outline.svg'
import News from './../../assets/nav/Documents-Outline.svg'
import Settings from './../../assets/nav/Setting-Outline.svg'
import Users from './../../assets/nav/Profile-GroupFriend-Outline.svg'
import {uuid} from "uuidv4";


type PropsType = {
    isAuth: boolean
    login: string | null
}

const Nav = (props: PropsType) => {

    type NavItemsType = {
        id: string
        pathTo: string
        icon: string
        navName: string
    }

    let navItems: Array<NavItemsType> = [
        {id: uuid(), pathTo: '/profile', icon: Profile, navName: 'PROFILE'},
        {id: uuid(), pathTo: '/messages', icon: Chat, navName: 'MESSAGES'},
        {id: uuid(), pathTo: '/users', icon: Users, navName: 'USERS'},
        {id: uuid(), pathTo: '/news', icon: News, navName: 'NEWS'},
        {id: uuid(), pathTo: '/music', icon: Music, navName: 'MUSIC'},
        {id: uuid(), pathTo: '/settings', icon: Settings, navName: 'SETTINGS'},
    ]

    return (
        <nav className={classes.nav}>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={"/login"} >Login</NavLink>}
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