import React from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Switch} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {DispatchType, StateType} from "./redux/state";

type AppPropsType = {
    state: StateType

    dispatch: DispatchType
}

function App(props: AppPropsType) {

    const ProfileRoute = () => <Profile
        newPostText={props.state.profilePage.newPostText}
        state={props.state.profilePage}
        dispatch={props.dispatch}
    />

    return (
        <div className="app-wrapper">
            <Nav/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile'
                           render={ProfileRoute}/>
                    <Route path='/messages'
                           render={() => <Dialogs
                               dispatch={props.dispatch}
                               newMessageText={props.state.dialogsPage.newMessageText}
                               state={props.state.dialogsPage}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/' render={ProfileRoute}/>
                </Switch>

            </div>
            <Friends friends={props.state.sidebar.friends}/>
        </div>
    );
}

export default App;
