import React from 'react';
import { useState } from 'react';
import './login.css';
import axios from 'axios';


const Login = () => {
  const [values, setValues]=useState({email:'',password:''});
  const handlesubmit = (event) =>{
    event.preventfault();
    axios.post('http://localhost:3000/auth/adminlogin',values)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div>
    <div className="container" >
    
      <img src="images/13.png" alt="Logo"/>
      <h2>Sign Up</h2>
      <form onSubmit={handlesubmit}>
        <div className="form-group">
          
          <input type="email" placeholder="Enter Username/Email" name='email'autoComplete="off"
          onChange={(e)=>setValues({...values,email: e.target.value})} />
        </div>
        <div className="form-group">
        
          <input type="password" placeholder="Enter Password" name='password'
          onChange={(e)=>setValues({...values,password: e.target.value})} />
        </div>
        <button type="submit">
          Login 
        </button>
      </form>
      <a href="forgot-password" className="forgot-password">
        Forgot your password? <span>Click Here!</span>
      </a>
    </div>
    </div>
  );
};

export default Login;
