import React, {useContext, useState} from 'react';
import AuthContext from '../context/AuthContext';
import AuthApi from '../services/authApi';

const LoginPage = ({history}) => {

    const{setIsAuth} = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        username: '',
        password:''
    })

    const [error, setError] = useState("")

    const handleChange =  (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await AuthApi.auth(credentials);
            setError("");
            setIsAuth(true);
            history.replace('/')
        } catch (errorRequest) {
            setError('error de login')
        }


        console.log(credentials);
    }
    return ( 
        <>
            <h1 className="text-center my-5">Login</h1>
            <form onSubmit={handleSubmit} className="container">
                <div className="form-group">
                    <label htmlFor="username">Email</label>
                    <input 
                        value={credentials.username}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        name="username"
                        id="username"
                        className={"form-control" + (error && " is-invalid")}
                    />
                    {error && <p className="invalid-feedback">{error}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                        value={credentials.password}
                        onChange={handleChange}
                        type="password" 
                        placeholder="mot de passe"
                        name="password"
                        id="password"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Connexion</button>
                    </div>
            </form>
        </> 
    );
}
 
export default LoginPage;