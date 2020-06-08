import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...routeProps}) => {
    return (
        <Route {...routeProps} render={props => {
            if (localStorage.getItem('token')) {
                return <Component {...props} />
            } else {
                return <Redirect to='/login' />
            } 

        }} />
    )
}