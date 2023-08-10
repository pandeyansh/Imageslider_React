// ContactForm.js
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation
//     if (name && email && message) {
//       // Simulate form submission for this example
//       setIsSubmitted(true);
//     }
//   };
  // ContactForm.js
// ...
const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (name && email && message) {
      // Simulate form submission for this example
      setIsSubmitted(true);
    } else {
      // Handle form validation error
      setMessage('Please fill out all fields.');
    }
  };
  // ...
  

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p className="success-message">Thank you for your message!</p>
        
      ) : (
        <div style={{}}>
        <form onSubmit={handleSubmit}style={{}}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} /><br/><br/>
          <button type="submit">Submit</button>
        </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
