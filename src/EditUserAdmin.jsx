import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clear } from './Redux/Action';

const EditUserAdmin = () => {
  const isLoggedIn = useSelector((state) => state);
const[user,setUser]=useState([]);
const[mail,setMail]=useState('');
const[users,setUsers]=useState([]);
const nav=useNavigate();
const dispatch = useDispatch();

const getUsers=async()=>{
  try{
  const response=await axios.get(`${isLoggedIn.link}/auth/getusers`,  {

  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': isLoggedIn.accessKey
  },
})
console.log(response.data)
setUsers(response.data)
}catch(e){

}

}



const handleEdit=async()=>{
  let show=true;
users.filter((a)=>a===user.email).map(()=>show=false);


  if(mail===user.email||show){
    try{
  const response=await axios.get(`${isLoggedIn.link}/user/edituser?mail=${user.email}&email=${mail}&name=${user.fullName}&role=${user.role}`,  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': isLoggedIn.accessKey
    },
  })
  if(response.data){
    dispatch(clear())
nav("/user/edited")
  }}catch(e){

  }

  }else{
  window.alert("Account existed with this mail ")
}
}

const getData=async()=>{
  try{
  const response=await axios.get(`${isLoggedIn.link}/user/getuser?username=${isLoggedIn.id}`,  {

    headers: {
      'Content-Type': 'application/json',
      'Authorization': isLoggedIn.accessKey
    },
  })
  console.log(response.data)
  setMail(response.data.email)
  setUser(response.data);}catch(e){

  }
 
}

useEffect(()=>{
getData();
getUsers();
if(isLoggedIn.id===null){
  nav("/user/welcome")
}
},[])

  console.log(isLoggedIn.id)
  return (
    <body1>
        
    <div className="contain">
        <h1>Edit User</h1>
        
 <form>
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Full Name</label>
    <input type="email" id="form4Example2" name="fullName" value={user.fullName} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value,})} class="form-control" />
  </div></form>
        <form >

 
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" name="email" value={user.email} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value,})} class="form-control" />
    
  </div>
 
  <div data-mdb-input-init>
  <label class="form-label" for="form4Example2">Role</label>
  <select class="form-select"  value={user.role} onChange={(e)=>setUser({...user,[e.target.name]:e.target.value,})} name="role"  >
  <option selected>Select Role</option>
  <option value="ADMIN">ADMIN</option>
  <option value="USER">USER</option>
</select>
</div>
<p></p>
  <button data-mdb-ripple-init type="button" onClick={handleEdit} class="btn btn-primary btn-block mb-4">Edit</button>
</form>
</div>
        </body1>
  )
}

export default EditUserAdmin
