import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CustomerPage from './components/customers/CustomerPage';
import ProtectedRoutes from './components/auth/Auth';
import Header from './components/common/Header';
import PageNotFound from './pages/PageNotFound';
import Login from './components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/dashboard" element={<ProtectedRoutes />}>
                    <Route path="" element={<CustomerPage />} />
                    {/* <Route path="" element={<CustomerPage />} /> */}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
