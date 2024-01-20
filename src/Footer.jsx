import React from 'react'

const Footer = () => {
    return (
        <footer style={footerStyle}>
          <a href="#" style={footerLinkStyle}>About</a>
          <a href="#" style={footerLinkStyle}>Career</a>
          <a href="#" style={footerLinkStyle}>Contact</a>
        </footer>
      );
    };
    
    // Styles
    const footerStyle = {
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '10px',
    };
    
    const footerLinkStyle = {
      color: '#fff',
      margin: '0 10px',
      textDecoration: 'none',
    };
    
    export default Footer;
