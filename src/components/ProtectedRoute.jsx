import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({element}) => {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    React.useEffect(() => {
        if (!isAuthenticated) {
            toast.info('Please log in Checkout.');
        }
    }, [isAuthenticated]);

    return isAuthenticated ? element : <Navigate to="/loginform" state={{ from: location }} />;
};

export default ProtectedRoute;
