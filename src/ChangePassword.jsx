import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const ChangePassword = () => {
    const[show,setShow]=useState(false);
    const[oldPass,setOldPass]=useState('');
    const[newPass,setNewPass]=useState('');
    const[newRePass,setReNewPass]=useState('');
    const nav=useNavigate();
    const isLoggedIn = useSelector((state) => state);
    const handleSubmit=async()=>{
      if(newRePass!==newPass){
        window.alert("enter same password")
      }else{
        try{
         const reponse= await axios.get(`${isLoggedIn.link}/image/editpass?username=${isLoggedIn.user}&oldpassword=${oldPass}&newpassword=${newPass}`,  {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': isLoggedIn.accessKey
          },
        }) 
        if(reponse.data===isLoggedIn.user){
          nav("/")

        }else{
          window.alert("password is incorrect")
        }
        
        }catch(e){
  
              } 
      }


    }
      return (
        <body1>
    <div class="conta mt-4 mb-4 p-3 d-flex justify-content-center"> 
    <div class="card1 p-4"> 
    
      <form><h3>Change Password</h3>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Old Password</label>
    <input type={!show?"password":"email"} class="form-control" value={oldPass} onChange={(e)=>setOldPass(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter New Password</label>
    <input type={!show?"password":"email"} class="form-control" value={newPass} onChange={(e)=>setNewPass(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Re-Enter Password</label>
    <input type={!show?"password":"email"} class="form-control" value={newRePass} onChange={(e)=>setReNewPass(e.target.value)} id="exampleInputPassword1"/>
  </div>
  <div><input class="form-check-input" onClick={()=>setShow(!show)} type="checkbox" value="" id="flexCheckChecked" checked={show}/>
  <a>  Show Password</a></div>
  <button type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
    </div>
    </div></body1>
  )
}

export default ChangePassword
