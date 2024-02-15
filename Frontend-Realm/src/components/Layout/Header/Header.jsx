import React from 'react';
import './header.css';
import profileIcon from './pfp.jpeg';
function Header() {
  return (
    <header className="header">
      <div className="container">
        
        <div className="logo">
          <img src="college_logo.png" alt="College Logo" className="logo-image" />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/signin" className="nav-link">Signin</a></li>
            <li><a href="/signup" className="nav-link">Signup</a></li>
            <li><a href="/chat" className="nav-link">Chat</a></li>
            <li><a href="/dashboard" className="nav-link">DashBoard</a></li>
          </ul>
        </nav>
        <div className="profile-icon">
          <img src={profileIcon} alt="Profile Icon" href="/profile" className="profile-icon-image" />
        </div>
      </div>
    </header>
  )
}

export default Header
