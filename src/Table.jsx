import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import './Table.css'
import axios from 'axios';
import { setId } from './Redux/Action';
// https://stegno-production.up.railway.app
const Table = () => {
  const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('Welcome');
    const { id } = useParams();
  const nav=useNavigate();
  const isLoggedIn = useSelector((state) => state);
  const [user,setUser]=useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const[spamUser,setSpam]=useState([]);
  const dispatch = useDispatch();
  const [userFilter,setUserFilter]=useState([]);
  const [search,setSearch]=useState('');
    const [filters, setFilters] = useState('');

  // used to show message and clear it after 5 seconds
  useEffect(() => {
    setIsVisible(true);
    getData();
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds
    return () => clearTimeout(timeout);
    
  }, [message]);


  // used to check user ids login or not
  useEffect(()=>{
    setMessage(id);
 getSpam();
    if(!isLoggedIn.isLoggedIn){
       nav("/login/Please Login First");
      }else{
        getData();
      }
 },[])

  

      // use to fetch th data from api
      const getData=async()=>{        
        try {
          const response =await axios.get(`${isLoggedIn.link}/user/allusers`, {
           
            headers: {
           
            'Content-Type': 'application/json',
              'Authorization': isLoggedIn.accessKey,
              
            }
          });
          console.log(response.data)
          setUser(response.data);
          setUserFilter(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

const getSpam=async()=>{
  try {
    const response =await axios.get(`${isLoggedIn.link}/user/spamuser`, {
     
      headers: {
     
      'Content-Type': 'application/json',
        'Authorization': isLoggedIn.accessKey,
        
      }
    });
    console.log(response.data)
    setSpam(Object.keys(response.data))
    }catch(e){
   console.log(e)
   }
   }


   // used to edit user
const handleEdit=(id)=>{
  dispatch(setId(id));
nav("/editadmin")
}


const handleBan=async(mail,enable)=>{
  let confirmInput=false;
  if(enable){
    confirmInput= window.confirm(`Do you want to Ban User : ${mail}`);
  }else{
    confirmInput= window.confirm(`Do you want to Unban User : ${mail}`);
  }
    if(confirmInput===true){
    try {
     await  axios.get(`${isLoggedIn.link}/user/banuser?username=${mail}`, {        
        headers: {          
        'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey,  
        }});
        getData();
        if(enable){
          setMessage(`User ${mail} is Banned`);
        }else{
        setMessage(`User ${mail} is UnBanned`);
      }
  }catch(e){
    console.log(e)
  }}}




      // used to delete user
      const onDeleteHandler=async(idd)=>{
      let confirmInput= window.confirm(`Do you want to Delete User  : ${idd}`);
        if(confirmInput===true){
        try {
          await axios.get(`${isLoggedIn.link}/user/delete?username=${idd}`, {        
            headers: {          
            'Content-Type': 'application/json',
              'Authorization': isLoggedIn.accessKey,  
            }});
            getData();
            setMessage(`User ${idd} Deleted`);
      }catch(e){
        console.log(e)
      }}}
            
       
        
// used to filter the e data
useEffect(()=>{
  setUserFilter(user.filter((item) => search === '' ||  item.email.toLowerCase().includes(search.toLowerCase())).filter((item) => filters === 'All' || item.role === filters));
},[search])
useEffect(()=>{
  setUserFilter(user.filter((item) => search === '' ||  item.email.toLowerCase().includes(search.toLowerCase())).filter((item) => filters === 'All' || item.role === filters));
},[filters])





  return (
    <div>{isLoggedIn.role==="ADMIN"?<div><div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>
    {message}
  </div>
      <div class="authorized">
   <div className='cust'>
       {/* <div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>{message}</div> */}
      <a href='/add'><button type="button" class="btn btn-secondary" >Add</button></a>
      <div className= 'filteroption'><lable>Filter:</lable>
        <select name="category" onChange={(e)=>setFilters(e.currentTarget.value)}>
          <option value="All">All</option>
          <option  value="ADMIN" >ADMIN</option>
          <option  value="USER" >USER</option>
        </select><br/>
         <lable>Search:</lable><input type='text' className='iptext' onChange={(e)=>setSearch(e.currentTarget.value)}></input> </div>
      <div>
      {/* Red dot indicating new messages */}
      {spamUser.length > 0 && !showMessages && (
        <button type="button" class="btn btn-danger"
          style={{
            position: 'fixed',
            top: '55px',
            right: '30px',
            cursor: 'pointer',
          }}
         onMouseEnter={() => setShowMessages(true)} 
        ><a>Spam User</a>
          {/* Bullet character representing the red dot */}
        </button>
      )}

      {/* Messages roll-down container */}
      {showMessages && (
        <div onMouseLeave={() => setShowMessages(false)}
          style={{
            position: 'fixed',
            top: '40px',
            right: '10px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            zIndex: '999',
            // cursor: 'pointer',
          }}
        >
          {/* Display messages */}
          {spamUser.map((message, index) => (
            <div key={index} onClick={()=>handleBan(message,true)}  style={{cursor: 'pointer'}}>{message}</div>
          ))}

          {/* Close button */}
         
        </div>
      )}
    </div>
      <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Ban</th>
                    <th>Action</th>
                </tr>
        
        
            {userFilter.map((item,index)=>(<tr>
            <td>{index+1}</td>          
            <td>{item.fullName}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td><input class="form-check-input" type="checkbox" checked={!item.enable} onClick={()=>handleBan(item.email,item.enable)} style={{ backgroundColor: !item.enable ? 'red' : 'white' ,cursor: 'pointer'}} id="checkboxNoLabel" value="" aria-label="..."/></td>
            <td>
            <button type="button" onClick={()=>handleEdit(item.email)} class="btn btn-warning btn-sm">Edit</button>
              <button type="button" class="btn btn-danger btn-sm" onClick={()=>onDeleteHandler(item.email)}>Delete</button>
            </td>
            </tr>))}

    </table>   
    </div>
    </div></div>:
    <div  >

   <div >
   <h1  ><code>Access Denied</code></h1>
   <hr class="w3-border-white w3-animate-left" />
  <h3 class="w3-center w3-animate-right">You dont have permission to view this site.</h3>
  <h3 class="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
  <h6 class="w3-center w3-animate-zoom" ><strong>Error Code</strong>: 403 forbidden</h6>
  
 </div> 
 <a href="/">Home</a>
    </div>
    }
    </div>
  )
}

export default Table
