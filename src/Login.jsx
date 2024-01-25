import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './Redux/Action';
import './Login.css'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('Welcome');
    const { id } = useParams();
  const isLoggedIn = useSelector((state) => state);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
    const dispatch = useDispatch();
    const nav=useNavigate();
     console.log(isLoggedIn)

     const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }; console.log(formData)


    // handlenpm  login user
    const handleLogin=async()=>{

      
      let log=false;   
      // if(formData.username=="user@gmail.com"&&formData.password=="root"){
      //   log=true; 
      //   dispatch(login("token","user@gmail.com","USER"));
      // }
      // if(formData.username=="kakadeneha6990@gmail.com"&&formData.password=="root"){
      //   log=true; 
      //   dispatch(login("token","kakadeneha6990@gmail.com","ADMIN"));
      // }
    await axios.post("https://stegno-production.up.railway.app/auth/login", JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data)
        if(response.data!=="Credentials Invalid !!"){
          log=true; 
          dispatch(login(response.data.token,response.data.user,response.data.role));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });   
        if(log){
           nav('/')
         }else{
            window.alert('user & password is incorrect')
        } 
      }

      useEffect(() => {
        setIsVisible(true);
        const timeout = setTimeout(() => {
          setIsVisible(false);
         nav("/welcome")
        }, 5000); // 5 seconds
        return () => clearTimeout(timeout);
        
      }, [message]);

      
      useEffect(()=>{
        setMessage(id);

      },[])
  return (
    <div className="login-container">
      <div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>{message}</div>
    <form className="login-form" >
      <h2>Login</h2>
      <label>
        Username:</label>
      <input type="text" name='username' value={formData.username} onChange={handleInputChange} required/>
     <label>
          Password:</label>
      <input type="password" name='password' value={formData.password} onChange={handleInputChange} required/>
       <button type='button' onClick={handleLogin}>Login</button>
       <div className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
      
     
      
    </div>
  )
}

export default Login
