import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Action';
import { useNavigate } from 'react-router';
const Header = () => {
  const isLoggedIn = useSelector((state) => state);
  const nav=useNavigate();
  const dispatch = useDispatch();
  const log=()=>{
    dispatch(logout());
    nav("/You have Logged out");
  }
  const login=()=>{
    nav("/Please Login");
  }
    return (
        <header style={headerStyle}>
           <a href="/" style={headingStyle}><h1>STEGNOGRAPHER</h1></a>
         
         
        </header>
      );
    };
    
    // Styles
    const headerStyle = {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      marginLeft: 'auto',
    };
    const headingStyle = {
      color: '#fff',
      textAlign: 'center',
      
      marginLeft: 'auto',
    };
    
    


export default Header
