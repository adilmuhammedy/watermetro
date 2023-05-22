import React from 'react';
import './confirmation.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';

    const Confirmation = (props) => {
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
        <div className="rectan">
        <h2 className="ticket">TICKET DETAILS</h2>
        <h4 className="boarding">📍 Kakkanad</h4>
        <h4 className="destination">📍 Vyttila</h4>  
        <h4 className="deep">departing time:09:00</h4>
        <h4 className="arri">arriving time:10:00</h4>
        <h4 className="duration">Duration:20 mins</h4>
        <h4 className="fares">TICKET FARE:20 rs</h4>
        <button type="submit" className="sub">Confirm</button>




        
      </div>
  
    </div>
    );

}                                                                      

export default Confirmation;

































