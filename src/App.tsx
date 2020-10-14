import React from 'react';
import './App.scss';
import {Route, Switch, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import NavContainer from "./components/Nav/NavContainer";
import {connect} from "react-redux";
import {getAuthUserDataTC} from "./redux/reducers/actions/auth-actions";
import {compose} from "redux";
import {initializeAppTC} from "./redux/reducers/actions/app-actions";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/UI/Preloader/Preloader";

type MapDispatchToPropsType = {
    initializeAppTC: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}

type AppPropsTypes = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsTypes> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            debugger
            return <Preloader />
        }

        return (
            <div className="app-wrapper">
                <NavContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?' component={ProfileContainer}/>
                        <Route path='/messages' component={DialogsContainer}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/' component={ProfileContainer}/>
                    </Switch>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
    )(App)
;
