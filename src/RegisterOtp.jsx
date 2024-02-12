import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const RegisterOtp = () => {
const nav=useNavigate();
    const isLoggedIn = useSelector((state) => state);
    const [otp, setOTP] = useState('');


    const handleOTPChange = (event) => {
      const inputValue = event.target.value;
  
      // Allow only numeric characters
      if (/^[0-9]*$/.test(inputValue)) {
        setOTP(inputValue);
      }
    };
    const handleSubmit=async()=>{
        if(isLoggedIn.otp===otp){

      await axios.get(`${isLoggedIn.link}/auth/save?fullName=${isLoggedIn.fullName}&email=${isLoggedIn.mail}&password=${isLoggedIn.pass}`,  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey
        },})
        
        nav("/login/start")
      }else{
          window.alert("wrong otp")
        }
        
    }
  return (
    <body1>
        
    <div className="contain">
        <h1>OTP is :{isLoggedIn.otp}</h1>
        
 <form>
  <div data-mdb-input-init class="form-outline mb-4">
 
  <input
          type="email"
          id="otpInput"
          value={otp}
          onChange={handleOTPChange}
          maxLength="6"
        />
   </div></form>
        <form >

<p></p>
  <button data-mdb-ripple-init type="button"  onClick={handleSubmit} class="btn btn-primary btn-block mb-4">Validate</button>
 </form>
</div>
        </body1>
   )
}

export default RegisterOtp
