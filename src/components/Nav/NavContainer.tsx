import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import Nav from "./Nav";
import { logoutTC } from '../../redux/reducers/actions/auth-actions';
import {uuid} from "uuidv4";
import Profile from "../../assets/nav/Profile-Outline.svg";
import Chat from "../../assets/nav/Chat-Outline.svg";
import Users from "../../assets/nav/Profile-GroupFriend-Outline.svg";
import News from "../../assets/nav/Documents-Outline.svg";
import Music from "../../assets/nav/Play-Outline.svg";
import Settings from "../../assets/nav/Setting-Outline.svg";
import {AuthStateType} from "../../redux/reducers/auth-reducer";

export type NavItemsType = {
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

const NavContainer = () =>  {

        return (
            <Nav navItems={navItems}/>
        )
    }


export default NavContainer;
