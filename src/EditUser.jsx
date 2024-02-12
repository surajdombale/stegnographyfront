import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setEdit } from './Redux/Action';
 
const EditUser = () => {
  const nav=useNavigate();
  const isLoggedIn = useSelector((state) => state);
  const[user,setUser]=useState(isLoggedIn.username);
  const[email,setEmail]=useState(isLoggedIn.user);
  const[users,setUsers]=useState([]);
  const dispatch = useDispatch();
  
  const getUsers=async()=>{
    try{
    const response=await axios.get(`${isLoggedIn.link}/auth/getusers`,  {
  
    headers: {
      'Content-Type': 'application/json',
    },
  })
  console.log(response.data)
  setUsers(response.data)
}catch(e){

}
  }
  const handle=async()=>{
    let show=true;
    users.filter((a)=>a===email).map(()=>show=false);
    
    
      if(isLoggedIn.user===email||show){
    if(user===isLoggedIn.username&&email===isLoggedIn.user){
    }else{if(email===isLoggedIn.user&&user!==isLoggedIn.username){
      editUser()
    }
      if(email!==isLoggedIn.user){

        const digits = '0123456789';
        let otpp = '';
    
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * digits.length);
            otpp += digits.charAt(randomIndex);
        }
try{
      //   await axios.get(`${isLoggedIn.link}/auth/sendmail?to=${email}&msg=otp:${otpp}&subject=otp`,  {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': isLoggedIn.accessKey
      //   },
      // })
      dispatch(setEdit(email,user,otpp));
      nav("/editotp")
    }catch(e){

    }
    
      }
    }
  }else{
    window.alert("Account existed with this mail ")
  }
  }
  useEffect(()=>{


getUsers();
  },[])
     const editUser=async()=>{

      try{
        await axios.get(`${isLoggedIn.link}/image/edituser?mail=${isLoggedIn.user}&email=${isLoggedIn.user}&name=${user}&role=USER`,  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey
        },
      })
        nav('/profile');  
      }catch(e){

            }      }
     
    

  return (
    <body1>
        
    <div className="contain">
        <h1>Edit User</h1>
        
 <form>
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Full Name</label>
    <input type="email" id="form4Example2" value={user} onChange={(e)=>setUser(e.currentTarget.value)} name="fullName"  class="form-control" />
  </div></form>
        <form >

 
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} name="email"  class="form-control" />
    
  </div>
 
<p></p>
  <button data-mdb-ripple-init type="button"  onClick={handle} class="btn btn-primary btn-block mb-4">Edit</button>
  <a href="/profile"><button data-mdb-ripple-init type="button"  class="btn btn-dark btn-block mb-4">Cancel</button>
</a></form>
</div>
        </body1>
  )
}

export default EditUser
