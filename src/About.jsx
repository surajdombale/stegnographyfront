import React from 'react'

const About = () => {
  return (
    <div style={pageStyle}>
    <h2>About Us</h2>
    <p>Welcome to our website! We are dedicated to...</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus augue a ligula cursus, sit amet maximus tortor bibendum.</p>
    {/* Add more content about your organization */}
  </div>
);
};

const pageStyle = {
textAlign: 'center',
padding: '20px',
color: '#333',
};

export default About
