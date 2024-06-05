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
    nav("/login/You have Logged out");
  }
  const login=()=>{
    nav("/login/welcome");
  }
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <a class="navbar-brand" href="/"><strong><b><i  >Stegnographer</i></b></strong></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {isLoggedIn.role==="ADMIN"||isLoggedIn.role==="USER" ?<li class="nav-item active">
            <a class="nav-link" href="/profile">Profile <span class="sr-only"></span></a>
          </li>:null}
          {isLoggedIn.role==="ADMIN"||isLoggedIn.role==="USER" ?<li class="nav-item">
            <a class="nav-link" href="/embed">Embed</a>
          </li>:null}
          {isLoggedIn.role==="ADMIN"||isLoggedIn.role==="USER" ?<li class="nav-item">
            <a class="nav-link" href="/extract">Extract</a>
          </li>:null}
          {isLoggedIn.role==="ADMIN"||isLoggedIn.role==="USER" ?<li class="nav-item">
            <a class="nav-link" href="/image">Image</a>
          </li>:null}
          {isLoggedIn.role==="ADMIN"?<li class="nav-item">
            <a class="nav-link" href="/allimage">AllImage</a>
          </li>:null}
          {isLoggedIn.role==="ADMIN" ?<li class="nav-item">
            <a class="nav-link" href="/user/welcome">User</a>
          </li>:null}
         
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
