import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setId } from './Redux/Action';
import axios from 'axios';
const Images = () => {
  
  const [images,setImages]=useState([]);
  const dispatch = useDispatch();
    const nav=useNavigate();
    const isLoggedIn = useSelector((state) => state);
    const [imageFilter,setImageFilter]=useState([]);
  const [search,setSearch]=useState('');
  const handleEnable =async (id,enable) => {
    let confirmInput=false;
    if(enable){
      confirmInput= window.confirm(`Do you want to Disable Image id : ${id}`);
    }else{
      confirmInput= window.confirm(`Do you want to Enable Image id : ${id}`);
    }
      if(confirmInput===true){
    try {
      const response =await axios.get(`${isLoggedIn.link}/image/enableimage?id=${id}`, {     
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
const handleSeen=(id)=>{
  dispatch(setId(id));
  nav("/seen")

}
const getData=async()=>{
 
  try {
    const response =await axios.get(`${isLoggedIn.link}/image/getall?username=${isLoggedIn.user}`, { 
      headers: {    
      'Content-Type': 'application/json',
        'Authorization': isLoggedIn.accessKey,      
      }
    });
    setImages(response.data);
    setImageFilter(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}



  const onDeleteHandler=async(id)=>{
    let confirmInput= window.confirm(`Do you want to Delete User  : ${id}`);
    if(confirmInput){
    try {
      const response =await axios.get(`${isLoggedIn.link}/image/delete?id=${id}&username=${isLoggedIn.user}`, { 
        headers: {    
        'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey,      
        }
      });
     getData()
    } catch (error) {
      console.error('Error fetching data:', error);
    }}
  }     
    


  useEffect(()=>{
    getData();
    },[])


// used to filter the e data
useEffect(()=>{
  setImageFilter(images.filter((item) => search === '' ||  item.id.toString()===search));
},[search])





  return (
    <div> <lable>Search:</lable><input type='text' className='iptext' onChange={(e)=>setSearch(e.currentTarget.value)}></input>
       <table>
                <tr>
                    <th>No</th>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Enable</th>
                    <th>Action</th>
                </tr>
        
        
            {imageFilter.map((item,index)=><tr>
              <td>{index}</td>
            <td>{item.id}</td>          
            <td>{item.time}</td>
            <td><input class="form-check-input" type="checkbox" checked={item.enable} onClick={()=>handleEnable(item.id,item.enable)} style={{ backgroundColor: item.enable ? 'blue' : 'red' }} id="checkboxNoLabel" value="" aria-label="..."/></td>
            <td>
          
              <button type="button" class="btn btn-danger btn-sm" onClick={()=>onDeleteHandler(item.id)}>Delete</button>
              {isLoggedIn.subscribe&&<button type="button" onClick={()=>handleSeen(item.id)} class="btn btn-link">Seen</button>}
            </td>
            </tr>)}

    </table>
      
    </div>
  )
}

export default Images
