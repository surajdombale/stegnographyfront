import React from 'react'
import { useNavigate } from 'react-router';

const Forgot = () => {
    const nav=useNavigate();
    const handle=()=>{
        // wrute code to send details to official email
        nav("/login/Now Login")
    }
  return (
    <div class="card text-center" style={{width: '300px',
    margin: '40px auto 0',}}>
    <div class="card-header h5 text-white bg-primary">Password Reset</div>
    <div class="card-body px-5">
        <p class="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password and your current password.
        </p>
        <div class="form-outline">
            <input type="email" id="typeEmail" class="form-control my-3" />
            <label class="form-label" for="typeEmail">Email input</label>
        </div>
        <a href="#" class="btn btn-primary w-100" onClick={handle}>Reset password</a>
        <div class="d-flex justify-content-between mt-4">
            <a class="" href="/login/welcome">Login</a>
            <a class="" href="/signup">Register</a>
        </div>
    </div>
</div>
  )
}

export default Forgot
