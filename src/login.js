import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleHomeClick = () => {
    history.push('/');
  }
  
  const handleRegisterClick = () => {
    history.push('/register');
  }
  const handleFareDetailsClick = () => {
    history.push('/fare');
  }


  const handleBookTicketsClick = () => {
    history.push('/bookticket');
  }

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }
  const handleLoginClick = () => {
    history.push('/login');
  }

  return (

    <div className="Home">
    <header className="home-header">
    <h4 className="home" onClick={handleHomeClick}>HOME</h4>
        <h4 className="booktickets" onClick={handleBookTicketsClick}>BOOK TICKETS</h4>
        <h4 className="terminals" onClick={handleTerminalsClick}>TERMINALS</h4>
        <h4 className="faredetails" onClick={handleFareDetailsClick}>FARE DETAILS</h4>
        <h4 className="login" onClick={handleLoginClick}>LOGIN</h4>
    </header>
    <div className="rectangle"></div>
    <h2 className="loginhead">LOGIN</h2>
    <div className="formcontainer">
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
      <button className="noaccount" onClick={handleRegisterClick}>New User? Register here</button>
    </div>
    </div>
  );
};

export default Login;
