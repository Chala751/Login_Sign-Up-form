import React, { useState } from 'react';
import './Loginsignup.css';
import userIcon from '../Assets/user-icon.png';
import emailIcon from '../Assets/email-icon.png';
import passwordIcon from '../Assets/password-icon.jpg';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (action === "Sign Up") {
      if (!formData.name || !formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }
      setRegisteredUsers([...registeredUsers, formData.email]);
      alert("Sign Up Successful!");
      setFormData({ name: '', email: '', password: '' });
    } else {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }
      if (!registeredUsers.includes(formData.email)) {
        alert("User not registered. Please sign up first.");
        return;
      }
      alert("Login Successful!");
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className="container">
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? null : (
          <div className='input'>
            <img src={userIcon} alt="User" className="icon" />
            <input type="text" name="name" placeholder='Enter Your Name' value={formData.name} onChange={handleInputChange} />
          </div>
        )}
        <div className='input'>
          <img src={emailIcon} alt="Email" className="icon" />
          <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleInputChange} />
        </div>
        <div className='input'>
          <img src={passwordIcon} alt="Password" className="icon" />
          <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleInputChange} />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">Lost password? <span>Click Here!</span></div>
      )}
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>
          Sign Up
        </div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}> 
          Login
        </div>
      </div>
      <button className="action-button" onClick={handleSubmit}>{action}</button>
    </div>
  );
}

export default LoginSignup;
