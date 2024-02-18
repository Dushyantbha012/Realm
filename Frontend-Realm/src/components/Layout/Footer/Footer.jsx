import React from 'react'
import './footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="college_logo.png" alt="College Logo" className="logo-image" />
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your College Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
  
}

export default Footer
