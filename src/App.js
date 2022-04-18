import React from 'react';
import Header from './components/common/Header';
import { Route, Routes, Navigate, Outlet, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import CoursesPage from './components/courses/CoursesPage';
import './App.css';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/dashboard" element={<PrivateOutlet />}>
                    <Route path="" element={<CoursesPage />} />
                    {/* <Route path="" element={<CoursesPage />} /> */}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

function PrivateOutlet() {
    return true ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
