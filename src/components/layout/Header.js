import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling within the page
import { Link as RouterLink, useLocation } from 'react-router-dom'; // For routing and to determine current location
import './Header.css'; // Ensure the CSS file is properly linked

function Header() {
  const location = useLocation(); // This hook gives us the current location object
  const isHomePage = location.pathname === '/'; // This checks if the current pathname is the homepage

  return (
    <header className="header">
      <div className="logo">
        {isHomePage ? (
          <ScrollLink to="hero" smooth={true} duration={1000}>
            <img src="/alterflock.png" alt="AlterFlock Logo" />
          </ScrollLink>
        ) : (
          <RouterLink to="/">
            <img src="/alterflock.png" alt="AlterFlock Logo" />
          </RouterLink>
        )}
      </div>
      <nav className="navigation">
        <ul>
          <li>
            {isHomePage ? (
              <ScrollLink to="about" smooth={true} duration={1000}>
                How it Works
              </ScrollLink>
            ) : (
              <RouterLink to="/#about">About Us</RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to="opportunities" smooth={true} duration={1000}>
                Investment Opportunities
              </ScrollLink>
            ) : (
              <RouterLink to="/#opportunities">
                Investment Opportunities
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to="technology" smooth={true} duration={1000}>
                Technology
              </ScrollLink>
            ) : (
              <RouterLink to="/#technology">Technology</RouterLink>
            )}
          </li>
        </ul>
      </nav>
      <div className="auth-links">
        <RouterLink to="/signin" className="auth-link">
          Sign In
        </RouterLink>
        <RouterLink to="/register" className="auth-link register">
          Register
        </RouterLink>
      </div>
    </header>
  );
}

export default Header;
