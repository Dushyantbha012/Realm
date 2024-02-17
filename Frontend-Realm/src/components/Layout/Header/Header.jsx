import React from 'react';
import profileIcon from './pfp.jpeg';

function Header() {
  return (
    <header style={{ backgroundColor: '#0077b5', color: '#fff', padding: '10px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div>
          <img src="" alt="College Logo" style={{ height: '40px', width: 'auto' }} />
        </div>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'flex-end' }}>
            <li><a href="/" style={{ color: '#fff', padding: '10px 15px' }}>Home</a></li>
            <li><a href="/signin" style={{ color: '#fff', padding: '10px 15px' }}>Signin</a></li>
            <li><a href="/signup" style={{ color: '#fff', padding: '10px 15px' }}>Signup</a></li>
            <li><a href="/chat" style={{ color: '#fff', padding: '10px 15px' }}>Chat</a></li>
            <li><a href="/dashboard" style={{ color: '#fff', padding: '10px 15px' }}>Dashboard</a></li>
          </ul>
        </nav>
        <div>
          <a href="/profile">
            <img src={profileIcon} alt="Profile Icon" style={{ height: '40px', width: '40px', borderRadius: '50%', cursor: 'pointer' }} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
