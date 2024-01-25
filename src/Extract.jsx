import React, { useState } from 'react'

const Extract = () => {
    const [selectedFile, setSelectedFile] = useState(null);

  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
   
  
   
  
    return (
      <div style={pageStyle}>
        <h2 style={headerStyle}>Upload Photo and Get Text</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="fileInput" style={labelStyle}>Upload Photo:</label>
            <input type="file" id="fileInput" onChange={handleFileChange} accept="image/*" style={inputStyle} />
          </div>
          
          <button type="button"  style={buttonStyle}>Upload</button>
        </form>
      </div>
    );
  };
  
  const pageStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#333',
  };
  
  const headerStyle = {
    color: '#4CAF50',
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
    color: '#4CAF50',
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
