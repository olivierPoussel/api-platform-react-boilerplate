import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthApi from '../services/authApi';
import AuthContext from '../context/AuthContext'

const menu = ({history}) => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    const handleLogout = () => {
        AuthApi.logout();
        setIsAuth(false);
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
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link about" to="/">About</NavLink>
                    </li>
                    {!isAuth && (
                        <li>
                            <NavLink className="nav-link" to="/login">login</NavLink >
                        </li>
                    )
                    ||
                    (
                        <li className="nav-item">
                            <a onClick={handleLogout} className="nav-link text-danger" href="#">Déconnexion</a>
                        </li>
                    )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default menu;