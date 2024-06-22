// Eauth.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Eauth = (Component) => {
    return (props) => {
        console.log("Checking authentication");
        const isAuthenticated = !!localStorage.getItem('access_token');

        if (isAuthenticated) {
            console.log("User is authenticated");
            return <Component {...props} />;
        } else {
            console.log("User is not authenticated, redirecting to login");
            return <Navigate to="/login" />;
        }
    };
};

export default Eauth;
