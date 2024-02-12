import React from 'react'
import "./PaymentOtp.css"
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Subscribe } from './Redux/Action';
import axios from 'axios';



const PaymentOtp = () => {
    const nav=useNavigate();
    const isLoggedIn = useSelector((state) => state);
    const dispatch = useDispatch();
    const handlePay=async()=>{
        // create code to enter subscripton
        try{
         const response= await axios.get(`${isLoggedIn.link}/image/sub?username=${isLoggedIn.user}`,  {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': isLoggedIn.accessKey
          },
        }) 
       dispatch(Subscribe(response.data,true))
       nav('/')
          
        }catch(e){
  
              } 

        nav("/")
    }
  return (
    <section class="container-fluid  d-block">
  <div class="row justify-content-center">
      <div class="col-12 col-md-6 col-lg-4" style={{
  minWidth: '500px',
}}>
        <div class="card bg-white mb-5 mt-5 border-0" style={{
  boxShadow: '0 12px 15px rgba(0, 0, 0, 0.02)',
}}>
          <div class="card-body p-5 text-center">
            <h4>Verify</h4>
            <p>Your code was sent to your no:</p>

            <div class="otp-field mb-4">
              <input type="number"   value={0} />
              <input type="number"   value={0} />
              <input type="number"   value={0} />
              <input type="number"   value={0} />
              <input type="number"   value={0} />
              <input type="number"   value={0} />
            </div>

            <button class="btn btn-primary mb-3" onClick={handlePay}>
              Verify
            </button>

            <p class="resend text-muted mb-0">Didn't receive code? <a href="/payotp">Request again</a>
            </p>
          </div>
        </div>
      </div>
    </div>
</section>
   )
}

export default PaymentOtp
