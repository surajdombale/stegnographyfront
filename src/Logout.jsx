import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { logout } from './Redux/Action';
import { useNavigate } from 'react-router';
const Logout = () => {
    const nav=useNavigate();
    const dispatch = useDispatch();
    // used logout

        useEffect(()=>{
            dispatch(logout());
        nav("/You have Logged out");

        },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
