import React, { useState } from 'react'

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSignUp = () => {
      // Implement your sign-up logic here, e.g., send the user data to a server
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      // Reset the form after sign-up
      setUsername('');
      setEmail('');
      setPassword('');
    };
  
    return (
      <div style={pageStyle}>
        <h2 style={headerStyle}>Sign Up</h2>
        <form style={formStyle}>
          <div style={formGroupStyle}>
            <label htmlFor="usernameInput" style={labelStyle}>Username:</label>
            <input type="text" id="usernameInput" value={username} onChange={handleUsernameChange} style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="emailInput" style={labelStyle}>Email:</label>
            <input type="email" id="emailInput" value={email} onChange={handleEmailChange} style={inputStyle} />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="passwordInput" style={labelStyle}>Password:</label>
            <input type="password" id="passwordInput" value={password} onChange={handlePasswordChange} style={inputStyle} />
          </div>
          <button type="button" onClick={handleSignUp} style={buttonStyle}>Sign Up</button>
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
  
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '10px',
    cursor: 'pointer',
    border: 'none',
  };
  

export default SignUp
