import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';

const Extract = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    
    const [lastFile, setLastFile] = useState(null);
    const [usage,setUsage] = useState(false);
    const [data, setData] = useState(null);
    const isLoggedIn = useSelector((state) => state);
    const myFunction = async(param) => {
      if(lastFile===selectedFile||usage){
        if(usage){
          window.alert("beginer pack is over subscribe for more usage")
        }
       }
      else{

      setLastFile(param);
      if (param) {
        // Display a preview of the selected image
        const reader = new FileReader();
        reader.onload = (e) => {
          // setPreviewImage(e.target.result);
        };
        reader.readAsDataURL(param);  
      const formData = new FormData();
      formData.append('image', selectedFile);
      formData.append('username', isLoggedIn.user);
      const response=await axios.post(`${isLoggedIn.link}/image/gettext`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'application/json',
          'Authorization': isLoggedIn.accessKey
        }, })
        setData(response.data);
      }}
 };
  
const handleFileChange = (event) => {
      
      setSelectedFile(event.target.files[0]);
    };
  
   const handleSubmit=()=>{
    if(selectedFile!==null){
      myFunction(selectedFile)
       
   }else{
    window.alert("select File")
   }
   }



   const checkUsage=async()=>{
    try{
       const response=await axios.get(`${isLoggedIn.link}/image/seencheck?username=${isLoggedIn.user}`,{
           headers: {
    
             'Authorization': isLoggedIn.accessKey
           }, })
           console.log(response.data)
         setUsage(response.data)
         }
           catch(e){
             
           }
     }
   

     useEffect(()=>{
      if(isLoggedIn.role!=='ADMIN'||!isLoggedIn.subscribe){
        checkUsage()
      }
        },[])



   useEffect(()=>{
    if(isLoggedIn.role!=='ADMIN'||!isLoggedIn.subscribe){
      checkUsage()
    }
      },[selectedFile])
  
    return (
      <div style={pageStyle}>
        <h2 style={headerStyle}>Upload Photo and Get Text</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            
            <input type="file" id="fileInput" onChange={handleFileChange} accept="image/*" style={inputStyle}  />
          </div>
          
          <button type="button"  style={buttonStyle} onClick={handleSubmit}>Upload</button>
        </form>
       {data? <p>{data}</p>:null}
      </div>
    );
  };
  
  const pageStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#333',
  };
  
  const headerStyle = {
    // color: '#4CAF50',
    marginBottom: '30px',
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const formGroupStyle = {
    marginBottom: '20px',
    textAlign: 'left',
    width: '300px',
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    // color: '#4CAF50',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
  };
  
  const textareaStyle = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    minHeight: '100px',
  };
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
  };
  

export default Extract
