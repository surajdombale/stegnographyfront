import React, { useEffect, useState } from 'react'
import './AddUser.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
const AddUser = () => {
  const nav=useNavigate();
  const isLoggedIn = useSelector((state) => state);
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        userPassword:'',
        role:'',
        mobNumb:"",
      });
      useEffect(()=>{
        
        if(!isLoggedIn.isLoggedIn){
        
           nav("/Please Login First");
       }
     },[])
      const handleInputChange = (e) => {
        // Spread the existing form data and update the changed field
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData);
      };


      const handleSubmit=async()=>{
            
      await axios.post("http://localhost:8080/user/save", JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${isLoggedIn.accessKey}`
        },
      })
        .then(response => {
          console.log(response.data)
          nav(`/show/id no : ${response.data.id} added`)
          
        })
        .catch(error => {
          console.error('Error:', error);
        });   
          
        }
  return (
    <body1>
        
    <div className="container">
        <h1>Add New User</h1>
        <form id="user-form" encytpe="ENCTYPE_HERE">
            <div><label for="user-name">Name:</label>
            <input type="text" id="name"  name="name"  value={formData.firstName}
          onChange={handleInputChange} required /></div>
            <div><label for="user-username">UserName:</label>
            <input type="text" id="user-username"   name="userName"  value={formData.firstName}
          onChange={handleInputChange} required />
            </div><br/>
            <div><label for="user-email">Email:</label>
            <input type="text" id="user-email"   name="email"  value={formData.firstName}
          onChange={handleInputChange} required />
            </div><br/>
            <div><label for="user-password">Password:</label>
            <input type="text" id="user-password"   name="userPassword"  value={formData.firstName}
          onChange={handleInputChange} required />
            </div><br/>
            <div>
            <label for="userRole">Choose Role:</label>
            <select name="role"   id="role"  value={formData.firstName}
          onChange={handleInputChange} required>
            <option value="none" selected disabled hidden>Select an Option</option>     
          <option value="ADMIN" >Admin</option>
          <option value="MANAGER" >Manager</option>
          <option value="SUPERVISOR" >Supervisor</option>
        </select>
        </div><br/>
            <div><label for="user-mobile-no">Mobile No:</label>
            <input type="text" id="user-mobile-no"   name="mobNumb"  value={formData.firstName}
          onChange={handleInputChange} required />
            </div><br/>
                     
        <button type="button" onClick={handleSubmit}>Save</button>
        </form>
        <a href='/show/welcome' ><button >Cancel</button></a>
        </div>
        </body1>
  )
}

export default AddUser
