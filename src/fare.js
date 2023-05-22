import React, { useState } from 'react';
import './fare.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';

const FareDetails = (props) => {
  const history = useHistory();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ticketType, setTicketType] = useState("");

  const handleHomeClick = () => {
    history.push('/');
  }

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }

  const handleBookTicketsClick = () => {
    history.push('/bookticket');
  }

  const handleFareDetailsClick = () => {
    history.push('/fare');
  }

  const handleLoginClick = () => {
    history.push('/login');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your submit logic here
    console.log('From:', from);
    console.log('To:', to);
    console.log('Ticket Type:', ticketType);

    // Reset the form
    setFrom("");
    setTo("");
    setTicketType("");

    // Redirect to the current location
    history.push(props.match.path);
  }

  return (
    <>
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
      <h2 className="fare">FARE DETAILS</h2>
      <div className="rect">
        <form onSubmit={handleSubmit}>
          <h2 className="calcu">FARE CALCULATOR</h2>
          <h4 className="from1">FROM</h4>
          <div className='selectf'>
            <select value={from} className="selectfrom1" onChange={(e) => setFrom(e.target.value)}>
              <option value="" disabled hidden>
                SELECT YOUR STATION
              </option>
              <option value="1">KAKKANAD</option>
              <option value="2">VYTTILA</option>
              <option value="3">HIGHCOURT</option>
              <option value="4">VYPIN</option>
            </select>
          </div>
          <h4 className="to1">TO</h4>
          <div className='selectt'>
            <select value={to} className="selectto1" onChange={(e) => setTo(e.target.value)}>
              <option value="" disabled hidden>
                SELECT YOUR STATION
              </option>
              <option value="1">KAKKANAD</option>
              <option value="2">VYTTILA</option>
              <option value="3">HIGHCOURT</option>
              <option value="4">VYPIN</option>
            </select>
          </div>
          <h4 className="tickettype1">TICKET-TYPE</h4>
          <div className='typ'>
            <select value={ticketType} className="type1" onChange={(e) => setTicketType(e.target.value)}>
              <option value="">One-way</option>
              <option value="option1">Two-way</option>
            </select>
          </div>
          <button className="button1"type="submit">Submit</button>
        </form>
        <div className="recta">

        </div>
      </div>
    </>
  );
}

export default FareDetails;
