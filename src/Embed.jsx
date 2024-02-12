
  import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Embed = () => {
    
  const [textValue, setTextValue] = useState('');
  const [lastFile, setLastFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const isLoggedIn = useSelector((state) => state);
  const [previewImage, setPreviewImage] = useState(null);
  const [usage,setUsage] = useState(true);
  // const [imageBytes, setImageBytes] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // convertImageToByteArray(file);
      const reader = new FileReader();
     
      reader.readAsDataURL(file);

      setSelectedFile(file);
    }
  };
  

  const handleTextChange = (event) => {
    const text = event.target.value;
    setTextValue(text);
  };

  const handleUpload =async () => {
    // You can implement the upload logic here, for example, send the file and text to a server
    if(usage){
if(textValue!==''&&selectedFile!==null&&lastFile!==selectedFile){
 setLastFile(selectedFile);
    const formData = new FormData();
    formData.append('text', textValue);
    formData.append('image', selectedFile);
    formData.append('username', isLoggedIn.user);
    try{
    const response=await axios.post(`${isLoggedIn.link}/image/addtext`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'responseType': 'text',
          'Authorization': isLoggedIn.accessKey
        }, })
        setPreviewImage(`${isLoggedIn.link}/auth/download/${response.data}`)}
        catch(e){

        }
          
  }}else{
    window.alert("beginer pack is over subscribe for more usage")
  }};


  const checkUsage=async()=>{
 try{
    const response=await axios.get(`${isLoggedIn.link}/image/addcheck?username=${isLoggedIn.user}`,{
        headers: {
 
          'Authorization': isLoggedIn.accessKey
        }, })
        console.log(response.data)
      setUsage(!response.data)
      }
        catch(e){
          
        }
  }




  const handleDownload=()=>{
 
    fetch(previewImage)
    .then(response => response.blob())
    .then(blob => {
      // Create a Blob URL
      const blobUrl = URL.createObjectURL(blob);
      // Create a hidden anchor element
      const anchor = document.createElement('a');
      // Set the href attribute to the Blob URL
      anchor.href = blobUrl;

      // Set the download attribute to specify the filename for the downloaded image
      anchor.download = 'downloaded_image.jpg';

      // Append the anchor element to the body
      document.body.appendChild(anchor);

      // Trigger a click event on the anchor element to start the download
      anchor.click();

      // Remove the anchor element and revoke the Blob URL
      document.body.removeChild(anchor);
      URL.revokeObjectURL(blobUrl);
    })
    .catch(error => console.error('Error downloading image:', error));
    setPreviewImage(null);  
    setSelectedFile(null);
    setLastFile(null)
    setTextValue(''); 
  }




  useEffect(()=>{
if(isLoggedIn.role!=='ADMIN'&&!isLoggedIn.subscribe){
  checkUsage()
}
  },[],[lastFile])
  return (
    <div style={pageStyle}>
      <h2 style={headerStyle}>Upload Photo and Add Text</h2>
      <form style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="fileInput" style={labelStyle}>Upload Photo:</label>
          <input type="file" id="fileInput" onChange={handleFileChange} accept="image/*" style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
          <label htmlFor="textInput" style={labelStyle}>Add Text:</label>
          <textarea id="textInput" value={textValue} onChange={handleTextChange} style={textareaStyle}></textarea>
          </div>
          {previewImage==null? <button type="button" onClick={handleUpload} style={buttonStyle}>Upload</button>:<button type="button" onClick={handleDownload} style={buttonStyle}>Download</button>}
      </form>
      {previewImage&&<img src={previewImage}/>}
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '20px',
  // color: '#333',
};

const headerStyle = {
  // color: '#4CAsF50',
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


export default Embed
