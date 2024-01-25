import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import './Table.css'
import axios from 'axios';
const Table = () => {
  const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('Welcome');
    const { id } = useParams();
  const nav=useNavigate();
  const isLoggedIn = useSelector((state) => state);
  const [user,setUser]=useState([]);
  console.log(isLoggedIn.accessKey)


  // used to show message and clear it after 5 seconds
  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
     nav("/show/welcome")
    }, 5000); // 5 seconds
    return () => clearTimeout(timeout);
    
  }, [message]);


  // used to check user ids login or not
  useEffect(()=>{
    setMessage(id);
 
    if(!isLoggedIn.isLoggedIn){
       nav("/Please Login First");
      }else{
        getData();
      }
 },[])
  

      // use to fetch th data from api
      const getData=async()=>{        
        try {
          const response =await axios.get('https://stegno-production.up.railway.app/user/allusers', {
           
            headers: {
              
              'Authorization': `Bearer ${isLoggedIn.accessKey}`
              // "Access-Control-Allow-Origin": "http://localhost:3000",
              // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              // "Access-Control-Allow-Credentials": true,
              // "Access-Control-Allow-Headers": "content-type"
              // Add other headers if needed
            }
          });
          console.log(response.data)
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }



      // used to delete user
      const onDeleteHandler=async(idd)=>{
        let confirmInput= window.confirm(`Do you want to Delete Subcategory with Id : ${idd}`);
        if(confirmInput===true){
          await axios.post('https://stegno-production.up.railway.app/user/delete', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${isLoggedIn.accessKey}`
            },data: {
              username: idd,
              // Add other properties if needed
            },
          })
            .then(response => {
              console.log(response.data)
              nav(`/show/id no${idd} deleted`)
              
            })
            .catch(error => {
              console.error('Error:', error);
            });  
           }
      else{
        nav('/show/welcome')

      }
       
        }

  return (
    <div className='cust'>
       <div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>{message}</div>
      <a href='/add'><button >Add</button></a>
      <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
        
        <tr>
            <td>1</td>          
            <td>Neha Kakade</td>
            <td>ADMIN</td>
            <td>kakadeneha6990@gmail.com</td>
            <td>
              <button type="button" onClick={()=>onDeleteHandler("kakadeneha6990@gmail.com")}>Delete</button>
            </td>
            </tr>
            <tr>
            <td>2</td>          
            <td>Prajakta Kamgal</td>
            <td>ADMIN</td>
            <td>prajaktakamgal</td>
            <td>
              <button type="button" onClick={()=>onDeleteHandler("prajaktakamgal")}>Delete</button>
            </td>
            </tr>
            <tr>
            <td>3</td>          
            <td>Renuka Gaikawad</td>
            <td>ADMIN</td>
            <td>renukagaikawad</td>
            <td>
              <button type="button" onClick={()=>onDeleteHandler("renukagaikawad")}>Delete</button>
            </td>
            </tr>
            
            <tr>
            <td>4</td>          
            <td>user1</td>
            <td>USER</td>
            <td>user@gmail.com</td>
            <td>
              <button type="button" onClick={()=>onDeleteHandler("user@gmail.com")}>Delete</button>
            </td>
            </tr>

    </table>

   
    </div>
  )
}

export default Table
