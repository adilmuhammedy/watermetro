import React from 'react';
import './confirmation.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';
import { useLocation } from 'react-router-dom';
import  { useEffect, useState } from 'react';



    const Confirmation = (props) => {
    const history = useHistory();
    const [fare, setFare] = useState(null);
  
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


    const location = useLocation();
const { from, to, ticketType, nopass } = location.state  || {};
console.log('Form Values in confirm page:', from, to, ticketType, nopass);

useEffect(() => {
  const fetchFareData = async () => {
    try {
      const response = await fetch('http://localhost:4000/confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ from, to, ticketType, nopass })
      });

      if (response.ok) {
        const data = await response.json();
        const { fare } = data;
        setFare(fare);
      } else {
        console.error('Error fetching fare data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching fare data:', error);
    }
  };

  fetchFareData();
}, []);

console.log('Fare:', fare);



// Parse JSON request bodies

  

  
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
        <h4 className="boarding" id="depart">📍 {from}</h4>
        <h4 className="destination" id="arrive">📍{to}</h4>  
        <h4 className="deep">departing time: 00:00</h4>
       <h4 className="arri">arriving time: 00:00</h4>
        <h4 className="duration">Total passengers:{nopass}</h4>
        <h4 className="fares">Ticket Fare: {fare} rs</h4>
        <button type="submit" className="sub">Confirm</button>
      </div>
  
    </div>
    );

}                                                                      

export default Confirmation;
