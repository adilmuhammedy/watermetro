import React from 'react'
import './Homepage.css';

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <h4 className="home">HOME</h4>
        <h4 className="booktickets" >BOOK TICKETS</h4>
        <h4 className="terminals">TERMINALS</h4>
        <h4 className="faredetails">FARE DETAILS</h4>
        <h4 className="login">LOGIN</h4>
      </header>
      <div className="rectangle"></div>
    </div>
  );
}

export default Home;