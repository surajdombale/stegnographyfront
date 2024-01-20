import React from 'react'

const Header = () => {
    return (
        <header style={headerStyle}>
          <img src="path/to/your/logo.png" alt="Logo" style={logoStyle} />
          <div style={userInfoStyle}>
            <p>Email: kakadeneha6990.com</p>
            <button onClick={logout} style={logoutButtonStyle}>Logout</button>
          </div>
        </header>
      );
    };
    
    // Styles
    const headerStyle = {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
      marginLeft: 'auto',
    };
    
    const logoStyle = {
      maxWidth: '100px', // Adjust the size of your logo
      height: 'auto',
      display: 'block',
      margin: '0 auto', // Center the logo
    };
    
    const userInfoStyle = {
      marginTop: '10px',
      marginLeft: 'auto',
    };
    
    const logoutButtonStyle = {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '8px 16px',
      border: 'none',
      cursor: 'pointer',
      marginLeft: 'auto',
    };
    
    const logout = () => {
      // Add your logout logic here
      alert('Logout clicked!');
    };

export default Header
