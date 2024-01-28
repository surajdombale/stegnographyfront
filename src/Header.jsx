import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Action';
import { useNavigate } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css"
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
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a class="navbar-brand" href="/">Stegnographer</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/profile">Profile <span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/embed">Embed</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/extract">Extract</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/image">Image</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/all">AllImage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/show/welcome">User</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/setting">Setting</a>
          </li>
          
        </ul>
        
      </div>{isLoggedIn.isLoggedIn?
      <button type="button" class="btn btn-secondary" onClick={log}>Logout</button>:
            <button type="button" class="btn btn-secondary" onClick={login}>Login</button>}
    </nav>
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
