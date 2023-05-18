import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  const handleRegisterClick = () => {
    history.push('/register'); // Assuming '/register' is the path for the register page
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  return (

    <div className="Home">
    <header className="home-header">
      <h4 className="home">HOME</h4>
      <Link to="/book-tickets" className="booktickets">BOOK TICKETS</Link>
      <h4 className="terminals">TERMINALS</h4>
      <h4 className="faredetails">FARE DETAILS</h4>
      <Link to="/login" className="login">LOGIN</Link>
    </header>
    <div className="rectangle"></div>

    <div className="formcontainer">LOGIN
      <form className="loginform" onSubmit={handleSubmit}>
        <label className="email" htmlFor="email">Email</label>
        <input className="field"
          value={email}
          type="text"
          placeholder="abc@gmail.com"
          id="email"
          name="email"
          onChange={handleEmailChange}
        />
        <label className="password" htmlFor="password">Password</label>
        <input className="field1"
          value={pass}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePassChange}
        />
        <button className="submit" type="submit">Log In</button>
      </form>
      <button className="noaccount"onClick={handleRegisterClick}>New User? Register here</button>
    </div>
    </div>
  );
};

export default Login;
