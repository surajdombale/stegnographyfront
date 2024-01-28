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
      
    await axios.post("http://localhost:8080/auth/login", JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log(response.data)
        if(response.data!=="Credentials Invalid !!"){
          log=true; 
          dispatch(login(`Bearer ${response.data.token}`,response.data.user,response.data.role,response.data.subscribe));
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });   
        if(log){
           nav('/')
         }else{
          dispatch(login(`Bearer `,"response.data.user","ADMIN",true));
        
            window.alert('user & password is incorrect')
        } 
      }

      useEffect(() => {
        setIsVisible(true);
        const timeout = setTimeout(() => {
          setIsVisible(false);
         nav("/welcome")
        }, 5000); 
        return () => clearTimeout(timeout);
        
      }, [message]);

      
      useEffect(()=>{
        setMessage(id);

      },[])
  return (
    <section class="vh-100">
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
            <input type="email" id="form1Example13" class="form-control form-control-lg"  value={formData.username} onChange={handleInputChange} required />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" value={formData.password} onChange={handleInputChange} />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
           <div class="text-center">
            <a href="/forgot">Forgot password?</a>
            
    <p>Not a member? <a href="/signup">Register</a></p>
    </div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg btn-block" onClick={handleLogin}>Sign in</button>
        </form>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default Login
