// ProtectedComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedComponent = () => {
    const navigate = useNavigate();
    console.log("protected");
    const isAuthenticated = !!localStorage.getItem('access_token');

        if (isAuthenticated) {
            console.log("User is authenticated");
            return (
                <div>
                    <h1>Protected Content</h1>
                    <p>This content is only accessible by authenticated users.</p>
                </div>
            );

        } else {
            console.log("User is not authenticated, redirecting to login");

            navigate('/admin/login/'); 

        }

   
};

export default ProtectedComponent;
