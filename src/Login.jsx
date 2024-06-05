import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { login } from './Redux/Action';
import './Login.css'
import "bootstrap/dist/css/bootstrap.min.css"
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
     

     const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }; 


    // handlenpm  login user
    const handleLogin=async()=>{
try{
      if(formData.password!==''&&formData.username!==''){  
     console.log(formData)   
    const response=await axios.post(`${isLoggedIn.link}/auth/login`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response.data)
        if(response.data!=="Credentials Invalid !!"){
          console.log(response.data);
           dispatch(login(`Bearer ${response.data.token}`,response.data.userName,response.data.role,response.data.sub,response.data.fullName,response.data.joinDate,response.data.subDate));
           nav('/') 
         }else{  
          window.alert("Credentials Invalid !!");
        }
      }}catch(error){
        window.alert("Access Denied !!!!");
      }       
      }

      useEffect(() => {
        setIsVisible(true);
        const timeout = setTimeout(() => {
          setIsVisible(false);
        }, 5000); 
        return () => clearTimeout(timeout);
        
      }, [message]);

      
      useEffect(()=>{
     console.log(isLoggedIn);
        setMessage(id);
        if(isLoggedIn.isLoggedIn===true){
          nav("/")
        }

      },[])
  return (
    <section class="vh-100" >
       <div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>{message}</div>
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" name="username" value={formData.username} onChange={handleInputChange} required />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" name="password" value={formData.password} onChange={handleInputChange} required/>
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
           <div class="text-center">
            <a href="/forgot">Forgot password?</a>
            
    <p>Not a member? <a href="/signup">Register</a></p>
    </div>
          </div>
          <button type="button" class="btn btn-primary btn-lg btn-block" onClick={handleLogin}>Sign in</button>
        </form>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Login
