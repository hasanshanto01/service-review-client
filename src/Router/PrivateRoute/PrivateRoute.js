import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);
    const location = useLocation();


    if (loading) {
        return <div className='text-center'>
            <button className="btn loading bg-lime-600 border-0">loading</button>
        </div>
    }


    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;