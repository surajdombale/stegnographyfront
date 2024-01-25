import React from 'react'
import './NavBar.css'
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Action';
import { useNavigate } from 'react-router';
const NavBar = () => {
  const isLoggedIn = useSelector((state) => state);
  const nav=useNavigate();
  const dispatch = useDispatch();
  const log=()=>{
    dispatch(logout());
    nav("/");
  }
  const login=()=>{
    nav("/Please Login");
  }
  return (
    <nav className="navbar">
    <div className="logo"></div>
    
          
    
    {isLoggedIn.role=="ADMIN"?(
    <ul className="nav-links">
      
      <li><a href="/show/welcome">User</a></li>
      <li><a href="/embed">Embed</a></li>
      <li><a href="/extract">Extract</a></li></ul>):null
      }
      {isLoggedIn.role=="USER"?(
    <ul className="nav-links">
    <li><a href="/embed">Embed</a></li>
    <li><a href="/extract">Extract</a></li></ul>):null
    }
    <div style={userInfoStyle}>
          {isLoggedIn.isLoggedIn ? ( <button onClick={log} style={logoutButtonStyle}>Logout</button>):( <button onClick={login} style={logoutButtonStyle}>Login</button>)
} 
          </div>
  </nav>
  )
}

const userInfoStyle = {
  marginTop: '10px',
  // marginLeft: 'auto',
};
const logoutButtonStyle = {
  backgroundColor: '#4CAF50',
  color: '#fff',
  padding: '8px 16px',
  border: 'none',
  cursor: 'pointer',

};
export default NavBar
