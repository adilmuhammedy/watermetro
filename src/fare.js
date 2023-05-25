import React, { useState } from 'react';
import './fare.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';
import logo1 from './images/logo1.png';
import symbol1 from './images/symbol.png';
import symbolHover from './symbol-hover.png';
import ecoFriendly from './images/ecoFriendly.png';
import clockFast from './images/clock.png';
import comfortGiven from './images/comfort.png';
import eMobility from './images/e-mobility.png';


const FareDetails = (props) => {
  const history = useHistory();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [isSymbolHovered, setIsSymbolHovered] = useState(false);
  const [isEcoFriendly, setIsEcoFriendly] = useState(false);
  const [isClockFast, setIsClockFast] = useState(false);
  const [isComfortGiven, setIsComfortGiven] = useState(false);
  const [isEMobility, setIsEMobility] = useState(false);


  const handleHomeClick = () => {
    history.push('/');
  }
  

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }
  const handleSymbolMouseEnter = () => {
    setIsSymbolHovered(true);
  };
  
  const handleSymbolMouseLeave = () => {
    setIsSymbolHovered(false);
  };
  const ecofriendlyon = () => {
    setIsEcoFriendly(true);
  };
  
  const ecofriendlyoff = () => {
    setIsEcoFriendly(false);
  };
  const clockon = () => {
    setIsClockFast(true);
  };
  
  const clockoff = () => {
    setIsClockFast(false);
  };
  const comforton = () => {
    setIsComfortGiven(true);
  };
  
  const comfortoff = () => {
    setIsComfortGiven(false);
  };
  const eon = () => {
    setIsEMobility(true);
  };
  
  const eoff = () => {
    setIsEMobility(false);
  };
  
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
               <h4 className='metro9' >Kochi Water Metro</h4>
               <img src={logo1} className="logo1" alt="watermetro1" />
               <p className='place'>Kakkanad</p>
               <p className='place1'>Vyttila</p>
               <img src={symbol1} className="symbol8" alt="symbol1"/>
               <p className='time'>Time taken for your journey:20 minutes</p>
        </div>
        <h3 className="rupee">₹30</h3>
        <div className="icons">
          <div>
            <img
              src={isSymbolHovered ? symbolHover : symbolHover}
              className={`symbol ${isSymbolHovered ? 'hovered' : ''}`}
              alt="symbol"
              onMouseEnter={handleSymbolMouseEnter}
              onMouseLeave={handleSymbolMouseLeave}
            />
          </div>
          {isSymbolHovered && (
            <p className="related-text">Disable-Friendly</p>
          )}
          <div>
            <img
              src={isEcoFriendly ? ecoFriendly : ecoFriendly}
              className={`symbol1 ${isEcoFriendly ? 'eco' : ''}`}
              alt="symbol"
              onMouseEnter={ecofriendlyon}
              onMouseLeave={ecofriendlyoff}
            />
          </div>
          {isEcoFriendly && (
            <p className="related-text1">Eco-Friendly</p>
          )}
          <div>
            <img
              src={isClockFast ? clockFast : clockFast}
              className={`symbol2 ${isClockFast ? 'fast' : ''}`}
              alt="symbol"
              onMouseEnter={clockon}
              onMouseLeave={clockoff}
            />
          </div>
          {isClockFast && (
            <p className="related-text2">Faster way of travel</p>
          )}
          <div>
            <img
              src={isComfortGiven ? comfortGiven : comfortGiven}
              className={`symbol3 ${isComfortGiven ? 'comfort' : ''}`}
              alt="symbol"
              onMouseEnter={comforton}
              onMouseLeave={comfortoff}
            />
          </div>
          {isComfortGiven && (
            <p className="related-text3">Comfort</p>
          )}
          <div>
            <img
              src={isEMobility ? eMobility : eMobility}
              className={`symbol4 ${isEMobility ? 'mobility' : ''}`}
              alt="symbol"
              onMouseEnter={eon}
              onMouseLeave={eoff}
            />
          </div>
          {isEMobility && (
            <p className="related-text4">E-Mobility</p>
          )}
        </div>
      </div>
    </>
  );
};

export default FareDetails;