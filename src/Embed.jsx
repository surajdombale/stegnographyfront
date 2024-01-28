
  import React, { useState } from 'react';

const Embed = () => {
    const [selectedFile, setSelectedFile] = useState(null);
  const [textValue, setTextValue] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleTextChange = (event) => {
    const text = event.target.value;
    setTextValue(text);
  };

  const handleUpload = () => {
    // You can implement the upload logic here, for example, send the file and text to a server
    console.log('Selected File:', selectedFile);
    console.log('Text Value:', textValue);
    // Reset the form after upload
    setSelectedFile(null);
    setTextValue('');
  };

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
        <button type="button" onClick={handleUpload} style={buttonStyle}>Upload</button>
      </form>
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
