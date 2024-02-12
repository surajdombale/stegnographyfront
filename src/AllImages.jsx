import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const AllImages = () => {
 
  const [images,setImages]=useState([]);
  const isLoggedIn = useSelector((state) => state);
  const [imageFilter,setImageFilter]=useState([]);
  const [search,setSearch]=useState('');


  const handleBan = async(id,enable) => {
    let confirmInput=false;
    if(enable){
      confirmInput= window.confirm(`Do you want to Ban Image id : ${id}`);
    }else{
      confirmInput= window.confirm(`Do you want to UnBan Image id : ${id}`);
    }
      if(confirmInput===true){
    try {
      const response =await axios.get(`${isLoggedIn.link}/user/banimage?id=${id}`, {     
        headers: {       
        'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey,  
        }
      });
     
      getData()
     
    }catch(e){
    }
    }
  };
const getData=async()=>{
  try {
    const response =await axios.get(`${isLoggedIn.link}/user/getallimage`, {
     
      headers: {
     
      'Content-Type': 'application/json',
        'Authorization': isLoggedIn.accessKey,
        
      }
    });
    console.log(response.data)
    setImages(response.data);
    setImageFilter(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

  const onDeleteHandler=async(id)=>{
 let confirmInput=window.confirm(`Do you want to Delete Image id : ${id}`);  
      if(confirmInput===true){
    try {
      const response =await axios.get(`${isLoggedIn.link}/user/deleteimage?id=${id}`, {     
        headers: {       
        'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey,  
        }
      });
     
      getData()
     
    }catch(e){
    }
    }
  }



useEffect(()=>{
getData();
},[])




// used to filter the e data
useEffect(()=>{
  setImageFilter(images.filter((item) => search === '' ||  item.id.toString()===search || item.username.toLowerCase().includes(search.toLowerCase())));
},[search])



  return (<>{isLoggedIn.role==='ADMIN'?
    <div><lable>Search:</lable><input type='text' className='iptext' onChange={(e)=>setSearch(e.currentTarget.value)}></input>
      
       <table>
                <tr>
                    <th>Image Id</th>
                    <th>Owner</th>
                    <th>Date</th>
                    <th>Ban</th>
                    <th>Action</th>
                </tr>
        
        
            {imageFilter.map((item)=><tr>         
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.time}</td>
            <td><input class="form-check-input" type="checkbox" checked={item.ban} onClick={()=>handleBan(item.id,item.ban)} style={{ backgroundColor: item.ban ? 'red' : 'white' }} id="checkboxNoLabel" value="" aria-label="..."/></td>
            <td>
          
              <button type="button" class="btn btn-danger btn-sm" onClick={()=>onDeleteHandler(item.id)}>Delete</button>
            </td>
            </tr>)}

    </table>
    </div>:<div  >

<div >
<h1  ><code>Access Denied</code></h1>
<hr class="w3-border-white w3-animate-left" />
<h3 class="w3-center w3-animate-right">You dont have permission to view this site.</h3>
<h3 class="w3-center w3-animate-zoom">🚫🚫🚫🚫</h3>
<h6 class="w3-center w3-animate-zoom" ><strong>Error Code</strong>: 403 forbidden</h6>

</div> 
<a href="/">Home</a>
 </div>}</>
  )
}

export default AllImages
