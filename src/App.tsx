import React from 'react';
import './App.scss';
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Switch} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
}

function App(props: AppPropsType) {

    return (
        <div className="app-wrapper">
            <Nav/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                    <Route path='/messages'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/' render={()=><Profile/>}/>
                </Switch>

            </div>
            <Friends/>
        </div>
    );
}

export default App;
