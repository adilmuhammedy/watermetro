import React from 'react'
import './Homepage.css';
import { Link } from 'react-router-dom';

function Home() {
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
    </div>
  );
}

export default Home;