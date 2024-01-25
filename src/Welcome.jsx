import React from 'react'

const Welcome = () => {
    const pageStyle = {
        background: `url('/backGround.webp')`,
        backgroundSize: '100% 100%', 
        backgroundPosition: 'center',
        textAlign: 'center',
        color: '#fff',
        minHeight: '100vh', // Ensure the background takes up the full viewport height
        display: 'flex',
        flexDirection: 'column', // Set text color to contrast with the background
        width: '100%', // Set the width to cover the entire viewport
        height: '100%', // Set the height to cover the entire viewport
        
    };
  return (
    <div style={pageStyle}>
    
      <h1>Welcome to Our Website</h1>
   
    </div>
  )
}

export default Welcome
