import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Register, setOtp } from './Redux/Action';
const SignUp = () => {
  const nav=useNavigate();
  const[show,setShow]=useState(false);
  const isLoggedIn = useSelector((state) => state);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [againPassword, setAgainPassword] = useState('');
    const dispatch = useDispatch();
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleAgainPasswordChange = (event) => {
      setAgainPassword(event.target.value);
    };
    const handleSignUp = async() => {
      const mail = email.trim();
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(isLoggedIn)
      if (emailRegex.test(mail)) {
        if(againPassword!==password){
          
          window.alert("enter correct password");
         
        }else{
          const digits = '0123456789';
          let otp = '';
      
          for (let i = 0; i < 6; i++) {
              const randomIndex = Math.floor(Math.random() * digits.length);
              otp += digits.charAt(randomIndex);
          }
        try{
          // await axios.get(`${isLoggedIn.link}/auth/sendmail?to=${email}&msg=otp:${otp}&subject=otp`,  {
          //   headers: {
          //     'Content-Type': 'application/json',
          //     // 'Authorization': isLoggedIn.accessKey
          //   },
          // })
          dispatch(Register(email,username,otp,password));
          nav("/registerotp")
        }catch(e){

        }
      
         
        }
      } 
      
     

    };
  
    return (
      <section class="vh-60" style={sectionStyle}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={borderStyle}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">
                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-">
                      <input type="email" id="form3Example1c" class="form-control" value={username} onChange={handleUsernameChange} required />
                      <label class="form-label" for="form3Example3c">Your Name</label>
                    </div>
                  </div>
                </form>
                <form class="mx-1 mx-md-4">
                
                  

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" value={email} onChange={handleEmailChange} required/>
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type={!show?"password":"email"} id="form3Example4c" class="form-control" value={password} onChange={handlePasswordChange} required/>
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type={!show?"password":"email"} id="form3Example4cd" class="form-control" value={againPassword} onChange={handleAgainPasswordChange}  required/>
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                      <div><input class="form-check-input" onClick={()=>setShow(!show)} type="checkbox" value="" id="flexCheckChecked" checked={show}/>
  <a>  Show Password</a></div>
                    </div>
              
                  </div>
                  

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" onClick={handleSignUp}>Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    );
  };
  
  const borderStyle = {
    borderRadius: '20px',
  };
  
  const sectionStyle = {
    // background: '#eee',
    margin: '40px auto 0',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const formGroupStyle = {
    marginBottom: '20px',
    textAlign: 'left',
    width: '300px',
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#4CAF50',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  };
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
  };
  

export default SignUp
