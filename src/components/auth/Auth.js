import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
	const isAuth = useSelector(({ auth }) => auth);
	return isAuth && isAuth.loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
