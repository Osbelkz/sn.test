import React from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Switch} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Nav/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={DialogsContainer}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/' component={Profile}/>
                </Switch>
            </div>
            <SidebarContainer/>
        </div>
    );
}

export default App;
