import {Redirect, Route} from 'react-router-dom'

import React from 'react'

function PrivateRoute({component: Component, ...rest}) {
    const isSignIn = JSON.parse( localStorage.getItem('isSignin'));
    return (
        <>
            <Route {...rest} render={
                (props) =>  isSignIn ? <Component {...props} /> : <Redirect to="/" /> 
            } />
        </>
    )
}

export default PrivateRoute


// localStorage.getItem('isSignin') JSON.parse( localStorage.getItem('isSignin'));