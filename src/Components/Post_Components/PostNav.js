import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function PostNav()  {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div>
        <div className="post_nav_buttons">
            <Link to="/AllPost"><p className={`post_nav ${currentPath === "/AllPost" || currentPath === "/" ? "active_button" : ""}`}>All Post</p></Link>
            <Link to="/YourPost"><p className={`post_nav ${currentPath === "/YourPost" ? "active_button" : ""}`}>Your Post</p></Link>
            <Link to="/AddNewPost"><p id="add_new_post_btn" className={`post_nav ${currentPath === "/AddNewPost" ? "active_button" : ""}`}>Add new post</p></Link>
        </div>
        <Outlet/>
    </div>
  )
}
