import React, { useState } from 'react';
import './bookticket.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';
//import QRCode from 'qrcode.react';

const BookTicket = (props) => {
  const history = useHistory();
 // const [qrCodeData, setQRCodeData] = useState(null);
  const [selectedFrom, setSelectedFrom] = useState("SELECT");
  const [selectedTo, setSelectedTo] = useState("SELECT");
  const [selectedType, setSelectedType] = useState("");
  const [passengerCount, setPassengerCount] = useState("");

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
    history.push(props.match.path);
  }

  const handleFareDetailsClick = () => {
    history.push('/fare');
  }

  const handleLoginClick = () => {
    history.push('/login');
  }

  const handleFromChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFrom(selectedValue);
  };
  
  const handleToChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTo(selectedValue);
  };

  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedType(selectedValue);
  };

  const handlePassengerCountChange = (event) => {
    const count = event.target.value;
    setPassengerCount(count);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create request body
    const requestBody = {
      from: selectedFrom,
      to: selectedTo,
      ticketType: selectedType,
      passengerCount
    };

    console.log("Form Data:", requestBody);
 
    try {
      // Make API call to the backend
      const response = await fetch('http://localhost:4000/bookticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      console.log("Response:", response);

   
  
      // Reset the form
      setSelectedFrom("SELECT");
      setSelectedTo("SELECT");
      setSelectedType("");
      setPassengerCount("");

      // Redirect to the current location
      history.push(props.match.path);
      

      
            // Parse the response JSON
           // console.log("Response:", response);
           // const responseData = await response.json();

            // Set the QR code data
            //setQRCodeData(responseData.qrCode);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
        <form action="#" onSubmit={handleSubmit}>
          <h4 className="from">FROM</h4>
          <div className='selectfrom'>
            <select value={selectedFrom} onChange={handleFromChange} className="selectfrom">
              <option value="SELECT">----SELECT----</option>
              <option value="1">KAKKANAD</option>
              <option value="2">VYTTILA</option>
              <option value="3">HIGHCOURT</option>
              <option value="4">VYPIN</option>
            </select>
          </div>
          <h4 className="to">TO</h4>
          <div className='selectto'>
            <select value={selectedTo} onChange={handleToChange} className="selectto">
              <option value="SELECT">----SELECT----</option>
              <option value="1">KAKKANAD</option>
              <option value="2">VYTTILA</option>
              <option value="3">HIGHCOURT</option>
              <option value="4">VYPIN</option>
            </select>
          </div>
          <h4 className="tickettype">Ticket-type</h4>
          <div className='type'>
            <select value={selectedType} onChange={handleTypeChange} className="type">
            <option value="">SELECT</option>
              <option value="1">One-way</option>
              <option value="2">Two-way</option>
            </select>
          </div>
          <h4 className="nopass">No.of Passengers</h4>

            <input 
              type="number"
              placeholder="No.of Passengers"
              className="nopasslist"
              value={passengerCount}
              onChange={handlePassengerCountChange}
            />
       
          <button type="submit" className="submit1">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BookTicket;
