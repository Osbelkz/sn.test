import React from 'react';
import './App.scss';
import {Route, Switch, withRouter} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import NavContainer from "./components/Nav/NavContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/reducers/actions/app-actions";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/UI/Preloader/Preloader";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

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
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <NavContainer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?' render={() =>
                            <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }/>
                        <Route path='/messages' render={() =>
                            <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>}/>
                        <Route path='/users' component={UsersContainer}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/login' component={LoginPage}/>
                        <Route path='/' render={() =>
                            <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>}/>
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
