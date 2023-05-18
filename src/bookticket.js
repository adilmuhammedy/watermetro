import React from 'react';
import './bookticket.css';
import { useHistory } from 'react-router-dom';

const BookTicket = (props) => {
  const history = useHistory();

  const handleHomeClick = () => {
    history.push('/');
  }

  const handleTerminalsClick = () => {
    history.push('/terminals');
  }

  const handleBookTicketsClick = () => {
    history.push(props.match.path); // Redirect to the current location
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
      <header className="home-header">
        <h4 className="home" onClick={handleHomeClick}>HOME</h4>
        <h4 className="booktickets" onClick={handleBookTicketsClick}>BOOK TICKETS</h4>
        <h4 className="terminals" onClick={handleTerminalsClick}>TERMINALS</h4>
        <h4 className="faredetails">FARE DETAILS</h4>
        <h4 className="login">LOGIN</h4>
      </header>
      <div className="rectangle"></div>
      <h2 className="book1">BOOK TICKETS</h2>

      <div className="bookfrom">
        <form onSubmit={handleSubmit}>
        <h4 className="from">FROM</h4>
          <div className='selectfrom'>
          <select value="from" className="selectfrom">
          <option value="SELECT">----SELECT----</option>
          <option value="1">KAKKANAD</option>
          <option value="2">VYTTILA</option>
          <option value="3">HIGHCOURT</option>
          <option value="4">VYPIN</option>
          </select>
          </div>
          <h4 className="to">TO</h4>
          <div className='selectto'>
          <select value="to" className="selectto">
          <option value="SELECT">----SELECT----</option>
          <option value="1">KAKKANAD</option>
          <option value="2">VYTTILA</option>
          <option value="3">HIGHCOURT</option>
          <option value="4">VYPIN</option>
          </select>
          </div>
          <h4 className="tickettype">Ticket-type</h4>
          <div className='type'>
          <select value="Ticket-type" className="type">
          <option value="">One-way</option>
          <option value="option1">Two-way</option>
          </select>
          </div>
          <h4 className="nopass">No.of Passengers</h4>
          <div className='nopassfield'>
          <input type="text" placeholder="No.of Passengers" className="nopass"/>
          </div>
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookTicket;
