import React from 'react';
import {connect} from "react-redux";
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

export type NavItemsType = {
    id: string
    pathTo: string
    icon: string
    navName: string
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logoutTC: () => void
}

type RootPropsType = MapStatePropsType & MapDispatchToPropsType

class NavContainer extends React.Component<RootPropsType> {



    render() {
        let navItems: Array<NavItemsType> = [
            {id: uuid(), pathTo: '/profile', icon: Profile, navName: 'PROFILE'},
            {id: uuid(), pathTo: '/messages', icon: Chat, navName: 'MESSAGES'},
            {id: uuid(), pathTo: '/users', icon: Users, navName: 'USERS'},
            {id: uuid(), pathTo: '/news', icon: News, navName: 'NEWS'},
            {id: uuid(), pathTo: '/music', icon: Music, navName: 'MUSIC'},
            {id: uuid(), pathTo: '/settings', icon: Settings, navName: 'SETTINGS'},
        ]
        return (
            <Nav {...this.props} navItems={navItems}/>
        )
    }
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logoutTC})(NavContainer);
