import React from 'react';
import {Redirect,Route} from 'react-router-dom'

function PrivateRoute({component: Component, ...rest }) {
    const isSignin = JSON.parse(localStorage.getItem('login'));
    return (
        <>
            
        <Route {...rest} render={(props) => (isSignin ? <Component {...props}/> : <Redirect to="/" />)} />

        </>
    )
}

export default PrivateRoute;
