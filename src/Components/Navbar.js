import React from 'react'
import './css/nav.css';
import logo from './images/VentureLatticeLogo.png';
import user from './images/current_user.png'
export default function Navbar() {
  return (
    <nav>
        <div className="nav-content">
            <img className="company_logo" src={logo} alt="company logo"/>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="user">
                <img id="user_profile" src={user} alt="user_profile"/>
                <p>Megan Fox</p>
            </div>

            <div className="hamburger_menu">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
        </div>
    </nav>
  )
}

