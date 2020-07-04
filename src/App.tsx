import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Switch} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile'
                           render={() => <Profile
                               state={props.state.profilePage}/>}/>
                    <Route path='/messages'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/' render={() => <Profile
                        state={props.state.profilePage}/>}/>
                </Switch>

            </div>
            <Friends friends={props.state.sidebar.friends}/>
        </div>
    );
}

export default App;
