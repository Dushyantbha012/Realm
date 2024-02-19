import React from 'react'
import './footer.css'
import college_logo from "../../../../public/Realm.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src={college_logo} alt="College Logo" className="logo-image" />
        </div>
        <div className="footer-info">
         
        </div>
      </div>
    </footer>
  );
  
}

export default Footer
