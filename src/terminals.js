import React, {useState, useEffect  } from 'react';
import { useHistory } from 'react-router-dom';
import './terminals.css';
import logo from './images/logo.png';
import { getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import avatar from './avatar.png';

const Terminals = () => {
  const history = useHistory();
  const [displayName, setDisplayName] = useState('');
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCGRG2r6MT-CoPN1d-UVrbwhbyWhg0VGyU",
      authDomain: "watermetro-69ffe.firebaseapp.com",
      projectId: "watermetro-69ffe",
      storageBucket: "watermetro-69ffe.appspot.com",
      messagingSenderId: "405368155649",
      appId: "1:405368155649:web:1ffea291743d7123c7da00",
      measurementId: "G-CREXXM61GJ"
      // Add your Firebase configuration object here
    };

    firebase.initializeApp(firebaseConfig);

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const displayName = user.displayName;
        setDisplayName(displayName);
        setIsUserSignedIn(true);
       
      } else {
        setIsUserSignedIn(false);
        setDisplayName('');
      }
    });
  }, []);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setIsUserSignedIn(false);
        setDisplayName('');
        console.log('User signed out successfully');
        alert('User signed out successfully');
        history.push('/');
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
      });
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleHomeClick = () => {
    history.push('/');
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
  const handleFareDetailsClick = () => {
    history.push('/fare');
  }


  return (
    <div className="Home">
      <header className="home-header">
      <img src={logo} className="logo" alt="watermetro" />

      <h4 className="home" onClick={handleHomeClick}>HOME</h4>
        <h4 className="booktickets" onClick={handleBookTicketsClick}>BOOK TICKETS</h4>
        <h4 className="terminals" onClick={handleTerminalsClick}>TERMINALS</h4>
        <h4 className="faredetails" onClick={handleFareDetailsClick}>FARE DETAILS</h4>
        {!isUserSignedIn && (
        <h4 className="login" onClick={handleLoginClick} >LOGIN</h4>
        )}
      </header>
      <div className="rectangle"></div>
      <h2 className="book1">TERMINALS</h2>

      <div className="rect2">
        <h4 className='kakkanad'>KAKKANAD</h4>
        <img src="/images/high-court.jpg" className='imgkakkanad' alt='highcourt' />
        <h4 className='vyttila'>VYTTILA</h4>
        <img src="/images/high-court.jpg" className='imgvyttila' alt='highcourt' />
        <h4 className='highcourt'>HIGHCOURT</h4>
        <img src="/images/high-court.jpg" className='imghighcourt' alt='highcourt' />
        <h4 className='vypin'>VYPIN</h4>
        <img src="/images/high-court.jpg" className='imgvypin' alt='highcourt' />
      </div>
      {isUserSignedIn && (
      <div className="dropdown">
        <img src={avatar} alt="Avatar" className="avatar" onClick={toggleDropdown}></img>
       
        <div className="welcome-message">
          Welcome, {displayName}!
          
        </div>
        {isOpen && (
          <ul className="dropdown-menu">
            <li>Account</li>
            <li>Settings</li>
            <li onClick={handleSignOut}>Logout</li>
          </ul>
        )}
      </div>
      )}
    </div>
  );
};

export default Terminals;
