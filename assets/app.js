import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, withRouter } from 'react-router-dom';
import Menu from './components/menu';
import PrivateRoute from './components/PrivateRoute';
import AuthContext from './context/AuthContext';
import ArticleDetail from './pages/articleDetail';
import CreateArticle from './pages/createArticle';
import Home from './pages/home';
import LoginPage from './pages/loginPage';
import RegistrationPage from './pages/registrationPage';
import AuthApi from './services/authApi';
import './styles/app.css';
import './styles/bootstrap.min.css';

AuthApi.init();

const App = () => {
    const NavbarRouter = withRouter(Menu);

    const contextValue = {
        isAuth: AuthApi.isAuth,
        isAdmin: AuthApi.isAdmin,
        username: AuthApi.getUserName
    }

    return (
        <AuthContext.Provider value={contextValue}>
            <React.StrictMode>
                <HashRouter>
                    <NavbarRouter />
                    <Switch>
                        <PrivateRoute admin='true' path='/article/create' component={CreateArticle}/>
                        <Route path='/article/:id' component={ArticleDetail} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/registration' component={RegistrationPage} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </HashRouter>
            </React.StrictMode>
        </AuthContext.Provider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);