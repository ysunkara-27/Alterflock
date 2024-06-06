import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import InvestmentOpportunities from './pages/InvestmentOpportunities';
import Interest from './pages/Interest';
import Footer from './components/layout/Footer';  // Corrected path if Footer.js is in the src/components folder
import HowItWorks from './pages/HowItWorks';
import './App.css';

function App() {
    return (
        <Router>
            <div className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/how-it-works">How it Works</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/InvestmentOpportunities">Impact Investing</Link></li>
                    <li><Link to="/Interest">Contact Us</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/InvestmentOpportunities" element={<InvestmentOpportunities />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/Interest" element={<Interest />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
