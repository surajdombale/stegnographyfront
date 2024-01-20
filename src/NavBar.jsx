import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="logo"></div>
    <ul className="nav-links">
      <li><a href="/show/welcome">User</a></li>
      <li><a href="/add">Add</a></li>
      
      {/* <li><a href="/logout">logout</a></li> */}
    </ul>
  </nav>
  )
}

export default NavBar
