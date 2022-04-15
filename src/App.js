import React from 'react';
import Header from './components/common/Header';
import { Route, Routes, Navigate, Outlet, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/dashboard" element={<PrivateOutlet />}>
          <Route path="" element={<Dashboard />} />
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
