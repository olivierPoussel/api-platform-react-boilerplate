import './styles/bootstrap.min.css'
import './styles/app.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, withRouter} from 'react-router-dom';
import Menu from './components/menu'
import LoginPage from './components/loginPage';
import Home from './components/home';
import AuthApi from './services/authApi';
import AuthContext from './context/AuthContext';
// import PrivateRoute from './components/PrivateRoute';

AuthApi.init();

const App = (props) => {

    const[isAuth, setIsAuth] = useState(AuthApi.isAuth());

    const NavbarRouter = withRouter(Menu);

    const contextValue = {
        isAuth,
        setIsAuth
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <React.StrictMode>
                <HashRouter>
                    <NavbarRouter />
                    <Switch>
                        <Route path='/login' component={LoginPage}>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        {/* <PrivateRoute path='/account' component={Account}></PrivateRoute> */}
                    </Switch>
                </HashRouter>
            </React.StrictMode>
        </AuthContext.Provider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);