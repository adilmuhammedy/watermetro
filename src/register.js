import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';
import './register.css';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [conpass, setConpass] = useState('');
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
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleConpassChange = (event) => {
    setConpass(event.target.value);
  };

  const handleLoginClick = () => {
    history.push('/login'); 
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


    <div className="formcontainer">REGISTER
      <form className="registerform" onSubmit={handleSubmit}>
        <label className="name" htmlFor="name">Full name</label>

        <input className="field2" 
          value={name}
          type="text"
          id="name" 
          name="name" 
          placeholder="full name"
          onChange={handleNameChange} />
        <label className="email1" htmlFor="email">Email</label>

        <input className="field3" 
           value={email}
           type="email"
           placeholder="abc@gmail.com" 
           id="email"
           name="email" 
           onChange={handleEmailChange} />
        <label className="password1"  htmlFor="password">Create Password</label>

        <input className="field4"
         value={pass} 
         type="password" 
         placeholder="***********" 
         id="password" 
         name="password"
         onChange={handlePassChange} />

        <label className="conpassword"  htmlFor="confirmpassword">Confirm Password</label>

       <input className="passfield2" 
        value={conpass} 
        type="password" 
        placeholder="***********" 
        id="confirmpassword" 
        name="confirmpassword" 
        onChange={handleConpassChange}/>
        <button className="button" type="submit">Register</button>
      </form>
      <button className="user"onClick={handleLoginClick}>Existing user? Login here</button>
    </div>
    </div>
    
  );
};
export default Register;