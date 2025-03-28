import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';
import Navbar from './components/navbar';
import { useAuthStore } from './store/useAuthStore'; // Zustand store for authentication

function App() {
  // Extract authUser and checkAuth from Zustand store
  const { authUser, checkAuth } = useAuthStore(); // Corrected variable name (authUser instead of authuser)

  // Check authentication status on component mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]); // Dependency array ensures checkAuth runs only when it changes

  // Log the current authenticated user
  console.log({ authUser });

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
