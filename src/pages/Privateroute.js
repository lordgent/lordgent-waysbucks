import {Redirect,Route} from 'react'

function PrivateRoute({component: Component, ...rest }) {
    const isSignin = false;
    return (
        <>
            
        <Route {...rest} render={(props) => (isSignin ? <Component {...props}/> : <Redirect to="/" />)} />

        </>
    )
}

export default PrivateRoute;
