import React from 'react';
import './Homepage.css';
import { useHistory } from 'react-router-dom';

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

  return (
    <div className="Home">
      <header className="home-header">
        <h4 className="home" onClick={handleHomeClick}>HOME</h4>
        <h4 className="booktickets" onClick={handleBookTicketsClick}>BOOK TICKETS</h4>
        <h4 className="terminals" onClick={handleTerminalsClick}>TERMINALS</h4>
        <h4 className="faredetails">FARE DETAILS</h4>
        <h4 className="login">LOGIN</h4>
      </header>
      <div className="rectangle"></div>
    </div>
  );
}

export default Home;
