import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';

function Home() {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

  const handleBookTicketsClick = () => {
    history.push('/bookticket');
  }

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }
  const handleFareDetailsClick = () => {
    history.push('/fare');
  }
  const handleLoginClick = () => {
    history.push('/login');
  }

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
    </div>
  );
}

export default Home;
