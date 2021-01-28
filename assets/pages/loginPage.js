import React, { useState } from 'react';
import Field from '../components/form/field';
import AuthApi from '../services/authApi';
import formService from '../services/formService';

const LoginPage = ({history}) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password:''
    })

    const [error, setError] = useState("")

    const handleChange =  (event) => formService.handleChange(event,credentials, setCredentials);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AuthApi.auth(credentials);
            setError("");
            history.push('/')
        } catch (errorRequest) {
            console.log(errorRequest)
            setError('error de login')
        }
    }
    return ( 
        <>
            <h1 className="text-center my-5">Login</h1>
            <form onSubmit={handleSubmit} className="container">
                <Field 
                    value={credentials.username}
                    onChange={handleChange}
                    type='email' 
                    placeholder="Email"
                    name='username'
                />
                <Field 
                    value={credentials.password}
                    onChange={handleChange}
                    type='password' 
                    placeholder="mot de passe"
                    name='password'
                />
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Connexion</button>
                </div>
            </form>
        </> 
    );
}
 
export default LoginPage;