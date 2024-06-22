// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!localStorage.getItem('access_token');

    return isAuthenticated ? <Component /> : <Navigate to="/admin/login" />;
};

export default ProtectedRoute;
