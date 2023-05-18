import React from 'react';
import { useHistory } from 'react-router-dom';
import './terminals.css';

const Terminals = () => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

  const handleBookTicketClick = () => {
    history.push('/bookticket');
  }

  return (
    <div className="Home">
      <header className="home-header">
        <h4 className="home" onClick={handleHomeClick}>HOME</h4>
        <h4 className="booktickets" onClick={handleBookTicketClick}>BOOK TICKETS</h4>
        <h4 className="terminals" onClick={() => history.push('/terminals')}>TERMINALS</h4>
        <h4 className="faredetails">FARE DETAILS</h4>
        <h4 className="login">LOGIN</h4>
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
    </div>
  );
};

export default Terminals;