import React, { useEffect, useState } from 'react'
import './AddUser.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
const AddUser = () => {
  const nav=useNavigate();
  const isLoggedIn = useSelector((state) => state);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password:'',
        role:'',
        enable:false,
        
      });
      useEffect(()=>{
        
        if(!isLoggedIn.isLoggedIn){
        
           nav("/Please Login First");
       }
     },[])
      const handleInputChange = (e) => {
      
         

        
           setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
       
      
      
        console.log(formData);
      };


      const handleSubmit=async()=>{
            
      await axios.post("https://stegno-production.up.railway.app/user/save", JSON.stringify(formData), {
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
        
    <div className="contain">
        <h1>Add New User</h1>
        
 <form>
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Full Name</label>
    <input type="email" id="form4Example2" name="fullName" onChange={handleInputChange} class="form-control" />
  </div></form>
        <form >

 
  <div data-mdb-input-init class="form-outline mb-4">
  <label class="form-label" for="form4Example2">Email address</label>
    <input type="email" id="form4Example2" name="email" onChange={handleInputChange} class="form-control" />
    
  </div>
  <div data-mdb-input-init>
  <label class="form-label" for="form4Example2">Role</label>
  <select class="form-select" name="role" onChange={handleInputChange} >
  <option selected>Select Role</option>
  <option value="ADMIN">ADMIN</option>
  <option value="USER">USER</option>
</select>
</div>
  <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Add</button>
</form>
</div>
        </body1>
  )
}

export default AddUser
