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
        email: '',
        role:'',        
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
       
        if(formData.email!==''&&formData.fullName!==''&&formData.role!==''){
            
      await axios.get(`${isLoggedIn.link}/user/save?username=${formData.email}&role=${formData.role}&fullName=${formData.fullName}`,  {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey
        },
      })
        nav(`/user/${formData.email} added`)  
      } 
        }
  return (
    <body1>
     {isLoggedIn.role==='ADMIN'?   
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
<p></p>
  <button data-mdb-ripple-init type="button" onClick={handleSubmit} class="btn btn-primary btn-block mb-4">Add</button>
</form>
</div>:<div  >

<div >
<h1  ><code>Access Denied</code></h1>
<hr class="w3-border-white w3-animate-left" />
<h3 class="w3-center w3-animate-right">You dont have permission to view this site.</h3>
<h3 class="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
<h6 class="w3-center w3-animate-zoom" ><strong>Error Code</strong>: 403 forbidden</h6>

</div> 
<a href="/">Home</a>
 </div>}
        </body1>
  )
}

export default AddUser
