import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import logo from './images/logo.png';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };
  const firebaseConfig = {
    // Add your Firebase configuration object here
    apiKey: "AIzaSyCGRG2r6MT-CoPN1d-UVrbwhbyWhg0VGyU",
    authDomain: "watermetro-69ffe.firebaseapp.com",
    projectId: "watermetro-69ffe",
    storageBucket: "watermetro-69ffe.appspot.com",
    messagingSenderId: "405368155649",
    appId: "1:405368155649:web:1ffea291743d7123c7da00",
    measurementId: "G-CREXXM61GJ"
  };
  
  firebase.initializeApp(firebaseConfig);

  const handleSubmit = () => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Handle successful login
      const user = userCredential.user;
      console.log('Logged in user:', user);
    })
    .catch((error) => {
      // Handle login error
      console.error('Login error:', error);
    });

  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // Handle successful login
        const user = result.user;
        console.log('Logged in user:', user);
        // Redirect to a new page or perform any other actions
        history.push('/dashboard');
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
        // Display an error message or perform any other error handling
      });
  };

  const handleHomeClick = () => {
    history.push('/');
  };

  const handleRegisterClick = () => {
    history.push('/register');
  };

  const handleFareDetailsClick = () => {
    history.push('/fare');
  };

  const handleBookTicketsClick = () => {
    history.push('/bookticket');
  };

  const handleTerminalsClick = () => {
    history.push('/terminals');
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <div className="Home">
      <img src={logo} className="logo" alt="watermetro" />
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
          value={password}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          onChange={handlePassChange}
        />
        <button className="submit" type="submit">Log In</button>
      </form>
      <p className="or"><span className="or-line">OR</span></p>
      

      <button className="noaccount" onClick={handleRegisterClick}>New User? Register here</button>
      <button className="google" onClick={handleGoogleLogin}>  <span class="google-icon"></span>
  Sign in with Google</button>
    </div>
    </div>
  );
};

export default Login
