import React, { useState } from 'react';
import './bookticket.css';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';
import QRCode from 'qrcode.react';

const BookTicket = (props) => {
  const history = useHistory();
  const [qrCodeData, setQRCodeData] = useState(null);
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
      nopass: passengerCount,
    };
    var from=requestBody.from;
   var to=requestBody.to;
    var ticketType=requestBody.ticketType;
    var nopass=requestBody.nopass;

    let isValid = true;
    if(from==='SELECT' ||to==='SELECT' || ticketType==='' || nopass===''){
      alert("Please fill all the fields");
      isValid = false;
    
      
    }
    else if(from===to){
      alert('Please select different stations' );
      isValid = false;
    }
    else if(!(
      (from==="kakkanad" && to==="vyttila")||
      (from==="vyttila" && to==="kakkanad")||
      (from==="highcourt" && to==="vypin")||
      (from==="vypin" && to==="highcourt"))){
      alert( 'Selected route is not available, sorry!');
      isValid = false;
    
    }

    else if (parseInt(passengerCount) < 1) {
      alert('Number of passengers cannot be negative or zero');
      isValid = false;
    }
    else{
    history.push({
      pathname: '/confirmation',
      state: {
        from: selectedFrom,
        to: selectedTo,
        ticketType: selectedType,
        nopass: passengerCount
      }
    });
 
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
           console.log("Response:", response);
           const responseData = await response.json();

            // Set the QR code data
            setQRCodeData(responseData.qrCode);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
      history.push('/confirmation');
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
    
      </header>
      <div className="rectangle"></div>
      <h2 className="book1">BOOK TICKETS</h2>

      <div className="bookfrom">
        <form action="#" onSubmit={handleSubmit}>
          <h4 className="from">FROM</h4>
          <div className='selectfrom'>
            <select value={selectedFrom} onChange={handleFromChange} className="selectfrom">
              <option value="SELECT">----SELECT----</option>
              <option value="kakkanad">KAKKANAD</option>
              <option value="vyttila">VYTTILA</option>
              <option value="highcourt">HIGHCOURT</option>
              <option value="vypin">VYPIN</option>
            </select>
          </div>
          <h4 className="to">TO</h4>
          <div className='selectto'>
            <select value={selectedTo} onChange={handleToChange} className="selectto">
              <option value="SELECT">----SELECT----</option>
              <option value="kakkanad">KAKKANAD</option>
              <option value="vyttila">VYTTILA</option>
              <option value="highcourt">HIGHCOURT</option>
              <option value="vypin">VYPIN</option>
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
      <div classsName="qr">
      {/* Other JSX code */}
      {qrCodeData && (
        <div className="qr-container">
          <h2>QR Code</h2>
          <QRCode value={qrCodeData} />
        </div>
      )}
    </div>
    </div>
  );
}

export default BookTicket;
