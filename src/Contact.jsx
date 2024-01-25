import React from 'react'

const Contact = () => {
  return (
    <div style={pageStyle}>
    <h2>Contact Us</h2>
    <p>If you have any questions or inquiries, feel free to reach out to us:</p>
    <div style={contactInfoStyle}>
      <p>Email: kakadeneha6990@gmail.com</p>
      <p>Phone: +91 8767756446</p>
      {/* Add more contact information as needed */}
    </div>
  </div>
);
};

const pageStyle = {
textAlign: 'center',
padding: '20px',
color: '#333',
};

const contactInfoStyle = {
marginTop: '20px',
};

export default Contact
