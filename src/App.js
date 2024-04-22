// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header'; // Include these if you plan to use them
import Footer from './components/layout/Footer'; // Include these if you plan to use them
import Home from './pages/Home'; // Include these if you plan to use them
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Interest from './pages/Interest'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* This should render the Home component */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Interest" element={<Interest />} /> {/* Add this line */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home /> // If this is your default route for logged-in users
            </ProtectedRoute>
          }
        />
        {/* If you want to redirect from "/" to "/dashboard" for authenticated users */}
        { <Route path="/" element={<Navigate to="/dashboard" replace />} /> }
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
