import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from './images/logo.png';
import './Homepage.css';

import metroImage from './metro.jpg';
import metro1Image from './metro1.jpg';
import metro2Image from './metro2.jpg';
import image1Image from './images/image1.jpeg';

function Home() {
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

  const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const images = [
      metroImage,
      metro1Image,
      metro2Image,
      image1Image,
    ];
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 5000); // Change image every 5 seconds
  
      return () => {
        clearInterval(interval); // Clean up the interval on component unmount
      };
    }, []);
  
    return (
      <div>
        <img src={images[currentImageIndex]} alt="Slideshow" />
      </div>
    )
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
      <div className="homepagee">
        <h3 className="metro">Kochi Water Metro</h3>
        <h4 className="heading">Kochi became India's first city to have a Water Metro Project</h4>
        <p className="descri">Kochi, Kerala has become India's first city to have a Water Metro Project after the launch of its first boat in December 2021, namely 'Muziris,' among the 23 battery-powered electric boats being manufactured by Cochin Shipyard Limited.</p>
        <h5 className="boat">75+ <br></br>E-Boats</h5>
        <h5 className="route">15 Routes</h5>
        <h5 className="kms">75+ Kilometers</h5>
      </div>
      <Slideshow />
    </div>
  );
}

export default Home;
