import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
	const auth = useSelector(({ auth }) => auth);
    return auth && auth.loggedIn;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes;
