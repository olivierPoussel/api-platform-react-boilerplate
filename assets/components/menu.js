import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import AuthApi from '../services/authApi';

const menu = ({history}) => {

    const {isAuth, username} = useContext(AuthContext);

    const handleLogout = () => {
        AuthApi.logout();
        history.push('/login');
    }    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">ReactTuto</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    {!isAuth() && (
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/registration">Inscription</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Connexion</NavLink >
                            </li>                
                        </>
                    )
                    ||
                    (       
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/article/create">CreateArticle</NavLink>
                            </li>
                            <li><p className="nav-link">{"Bonjour "+username()}</p></li>
                            <li className="nav-item">
                                <a onClick={handleLogout} className="nav-link text-danger" href="#">Déconnexion</a>
                            </li>
                        </>
                    )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default menu;