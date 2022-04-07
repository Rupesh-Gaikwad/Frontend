import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './css/nav.css';
import logo from './images/VentureLatticeLogo.png';
import user from './images/current_user.png'
export default function Navbar() {

  const [menuOn, setMenuOn] = useState(false);
  let hangerbarMenuRef = useRef();
  const toggleMenu = () =>{
    setMenuOn(!menuOn);
  }

  useEffect( () => {
    let handler = (event) => {
      if( menuOn && !hangerbarMenuRef.current.contains(event.target)){
        setMenuOn(!menuOn);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
});

  return (
    <nav>
        <div className="nav-content">
            <img className="company_logo" src={logo} alt="company logo"/>
            <div ref={hangerbarMenuRef} className={`nav_links ${menuOn ? "nav_links_active" : ""}`}>
            <Link className="menu_user" to="/UserProfile">
                  <img id="user_profile" src={user} alt="user_profile"/>
                  <p>Megan Fox</p>
              </Link>
              <span id="close_menu" onClick={toggleMenu}>&#10005;</span>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>Services</li>
                  <li>Contact</li>
              </ul>
            </div>
            <Link className="user" to="/UserProfile">
                <img id="user_profile" src={user} alt="user_profile"/>
                <p>Megan Fox</p>
            </Link>

            <div className="hamburger_menu" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
        </div>
    </nav>


  )
}

