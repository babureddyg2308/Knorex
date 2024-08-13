import React, { useState } from 'react';
import './signup.css';
function SignUpForm({ onAddUser, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     if (!email.includes('@') || password.length < 6) {
      alert('Invalid email or password');
      return;
    }
    onAddUser({ firstName, lastName, email });
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <h2 style={{color:"white"}}>Sign Up</h2>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />  
        <input
          type="text" placeholder="Last Name"  value={lastName}  onChange={(e) => setLastName(e.target.value)}   required /> 
        <input
          type="email"  placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)} /> 
        <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required /> 
        <div className="actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
