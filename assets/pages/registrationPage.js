import React, { useState } from 'react';
import Field from '../components/form/field';
import AuthApi from '../services/authApi';
import formService from '../services/formService';
import UserApi from '../services/userApi';

const RegistrationPage = ({history}) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
      });
    
    const handleChange =  (event) => formService.handleChange(event, user, setUser);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //create
            await UserApi.create(user);
            // setError("");
        } catch (errorRequest) {
            console.log(errorRequest)
            // setError('erreur lors de l\'inscription')
        }
        //login
        try {
            await AuthApi.auth({
                username: user.email,
                password: user.password,
            });
            // setError("");
            history.push('/')
        } catch (errorRequest) {
            console.log(errorRequest)
            // setError('erreur lors de du login auto')
        }
    }

    return (
    <>
        <h1 className="text-center my-5">Inscription</h1>
        <form onSubmit={handleSubmit} className="container">
            <Field 
                value={user.email}
                onChange={handleChange}
                type='email' 
                placeholder="Email"
                name='email'
            />
            <Field 
                value={user.password}
                onChange={handleChange}
                type='password' 
                placeholder="Mot de passe"
                name='password'
            />
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Inscription</button>
            </div>
        </form>
    </>  
    );
}
 
export default RegistrationPage;