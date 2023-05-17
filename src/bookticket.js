import React from 'react';
import './bookticket.css';

function BookTicket() {
    return (
        <div className="Home">
        <header className="home-header">
          <h4 className="home">HOME</h4>
          <h4 className="booktickets">BOOK TICKETS</h4>
          <h4 className="terminals">TERMINALS</h4>
          <h4 className="faredetails">FARE DETAILS</h4>
          <h4 className="login">LOGIN</h4>
        </header>
        <div className="rectangle">
     
        </div>
        <h2 className="book1">BOOK TICKETS</h2>
        <div className="bookfrom">
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


          </div>

      </div>
    )
}



export default BookTicket;