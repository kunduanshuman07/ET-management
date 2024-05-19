import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UserLayout from './container/UserLayout'
import { useAuth } from "./context/AuthContext";
import LoginPage from './pages/LoginPage';
import { LinearProgress } from '@mui/material';
const RoutesJs = () => {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<LinearProgress />}>
            <LoginPage />
          </Suspense>
        }
      />

      <Route
        path="/*"
        element={
          <Suspense fallback={<LinearProgress />}>
            {auth ? <UserLayout /> : <Navigate to="/login" replace />}
          </Suspense>
        }
      />
    </Routes>
  )
}

export default RoutesJs