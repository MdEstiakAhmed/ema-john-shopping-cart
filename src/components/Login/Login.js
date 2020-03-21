import React from 'react';
import Auth from './useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = Auth();
    const redirectSignIn = () => {
        auth.signInWithGoogle()
        .then(result => {
            window.location.pathname = window.history.go(-1);
        })
    }

    const redirectSignOut = () => {
        auth.signInWithGoogle()
        .then(result => {
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <h1>login</h1>
                    {
                        auth.user ? 
                        <button onClick = {redirectSignOut}>sign out</button> :
                        <button onClick={redirectSignIn}>sign in with google </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;