import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import login from '../../Services/auth';
import LogoImage from '../../Images/LiganetCanchas.jpeg';


const LoginForm = ({ handleLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(formData.username, formData.password);
      handleLogin();
      setLoggedIn(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (loggedIn) {
    return <Navigate to='/Home' />;
  }

  return (
    <div className="login">
      <div className="left-section">
        <img src={LogoImage} alt="Login Image" className="logo-image" />
      </div>
      
      <div className="right-section">
        <h2>LIGANET</h2>
        <form onSubmit={handleSubmit} className='Formulario'>

          <div className="input-field">
            <p className='nombreInput'>Username</p>
            <input className='input'
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <p className='nombreInput'>Password</p>
            <input className='input'
              type="text"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
        
    
        <button type="submit" className='button'>Login</button>
        <button className='button'>Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        
      </div>
    </div>
  );
};

export default LoginForm;
