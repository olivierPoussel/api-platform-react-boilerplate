import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const PrivateRoute = ({path, component, admin = false}) => {

    const {isAuth, isAdmin} = useContext(AuthContext);

    return ((isAuth() && !admin) || ( admin && isAdmin()) )? 
        <Route path={path} component={component}/> 
        : 
        <Redirect to="/login" />
} 

export default PrivateRoute;