import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import LoginPage from './components/auth/LoginPage';
import ProtectedRoutes from './components/auth/Auth';
import Header from './components/common/header/Header';
import Spinner from './components/common/spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const CustomerPage = React.lazy(() => import('./components/customers/CustomerPage'));
const ProductPage = React.lazy(() => import('./components/products/ProductPage'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));

function App() {
	return (
		<div className="app">
			<Header />
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route path="/dashboard" element={<CustomerPage />} />
						<Route path="/products" element={<ProductPage />} />
					</Route>
					<Route exact path="/" element={<LoginPage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Suspense>
			<ToastContainer position="top-right" autoClose={3000} theme="colored" hideProgressBar />
		</div>
	);
}

export default App;
