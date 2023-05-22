import React from 'react';
import './bookticket.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';

const BookTicket = (props) => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }
  const handleConfirmClick = () => {
    history.push('/confirmation');
  }

  const handleBookTicketsClick = () => {
    history.push(props.match.path); // Redirect to the current location
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
    // You can access the form values using event.target
    const from = event.target.from.value;
    const to = event.target.to.value;
    const ticketType = event.target.ticketType.value;
    const passengerCount = event.target.passengerCount.value;

    // Example: Display the form values
    console.log('From:', from);
    console.log('To:', to);
    console.log('Ticket Type:', ticketType);
    console.log('Passenger Count:', passengerCount);

    // Reset the form
    event.target.reset();

    // Redirect to the current location
    history.push(props.match.path);
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
        <h4 className="login" onClick={handleConfirmClick}>CONFIRM</h4>
      </header>
      <div className="rectangle"></div>
      <h2 className="book1">BOOK TICKETS</h2>

      <div className="bookfrom">
        <form onSubmit={handleSubmit}>
        <h4 className="from">FROM</h4>
          <div className='selectfrom'>
          <select defaultValue="select" className="selectfrom">
          <option value="SELECT">----SELECT----</option>
          <option value="1">KAKKANAD</option>
          <option value="2">VYTTILA</option>
          <option value="3">HIGHCOURT</option>
          <option value="4">VYPIN</option>
          </select>
          </div>
          <h4 className="to">TO</h4>
          <div className='selectto'>
          <select defaultValue="select" className="selectto">
          <option value="SELECT">----SELECT----</option>
          <option value="1">KAKKANAD</option>
          <option value="2">VYTTILA</option>
          <option value="3">HIGHCOURT</option>
          <option value="4">VYPIN</option>
          </select>
          </div>
          <h4 className="tickettype">Ticket-type</h4>
          <div className='type'>
          <select defaultValue="select" className="type">
          <option value="">One-way</option>
          <option value="option1">Two-way</option>
          </select>
          </div>
          <h4 className="nopass">No.of Passengers</h4>
          <div className='nopassfield'>
          <input className="nopasslist "type="number" placeholder="No.of Passengers"/>
          </div>
          <button type="submit" className="submit1 ">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookTicket;
