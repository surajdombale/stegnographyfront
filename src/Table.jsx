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
  const [showMessages, setShowMessages] = useState(false);

  // Assume you have some messages in an array
  const messages = ['user 1', 'user 2', 'user 3']; 
  console.log(isLoggedIn.accessKey)
const banUser=(user)=>{
window.confirm("Do You Want To Ban : "+user)
}

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
          const response =await axios.get('http://localhost:8080/user/allusers', {
           
            headers: {
           
            'Content-Type': 'application/json',
              'Authorization': isLoggedIn.accessKey,
              
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
       {/* <div className={`message-bar ${isVisible ? 'show' : 'hide'}`}>{message}</div> */}
      <a href='/add'><button type="button" class="btn btn-secondary" >Add</button></a>
      <div>
      {/* Red dot indicating new messages */}
      {messages.length > 0 && !showMessages && (
        <div
          style={{
            position: 'fixed',
            top: '55px',
            right: '30px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '30%',
            padding: '1px',
            cursor: 'pointer',
          }}
         onMouseEnter={() => setShowMessages(true)} 
        ><a>Spam User</a>
          &#8226; {/* Bullet character representing the red dot */}
        </div>
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
          }}
        >
          {/* Display messages */}
          {messages.map((message, index) => (
            <div key={index} onClick={()=>banUser(message)}  style={{cursor: 'pointer'}}>{message}</div>
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
