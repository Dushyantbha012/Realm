import React from 'react';
import {useNavigate} from "react-router-dom"
import './header.css';
import college_logo from "../../../../public/Realm.png"
import profileIcon from "../../../../public/profileIcon.webp"
function Header() {
  const navigateTo = useNavigate()
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={college_logo} alt="College Logo" className="logo-image" onClick={()=>(navigateTo("/"))} />
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-link" onClick={()=> navigateTo("/dashboard")}>DashBoard</li>
            <li className="nav-link" onClick={()=> navigateTo("/chat")}>Chat</li>
            <li className="nav-link" onClick={()=> navigateTo("/signin")}>Signin</li>
            <li className="nav-link" onClick={()=> navigateTo("signup")} >Signup</li>
          </ul>
        </nav>
        <div className="profile-icon">
          <img src={profileIcon} alt="Profile Icon" onClick={()=> navigateTo("/profile")}className="profile-icon-image" />
        </div>
      </div>
    </header>
  )
}

export default Header
