import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CustomerPage from './components/customers/CustomerPage';
import LoginPage from './components/auth/LoginPage';
import ProductPage from './components/products/ProductPage';
import ProtectedRoutes from './components/auth/Auth';
import Header from './components/common/header/Header';
import PageNotFound from './pages/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route element={<ProtectedRoutes />}>
					<Route path="/dashboard" element={<CustomerPage />} />
					<Route path="/products" element={<ProductPage />} />
				</Route>
				<Route exact path="/" element={<LoginPage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<ToastContainer position="top-right" autoClose={3000} theme="colored" hideProgressBar />
		</div>
	);
}

export default App;
