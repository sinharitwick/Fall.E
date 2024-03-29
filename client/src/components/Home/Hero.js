import React from "react";
import "../../assets/Styles/Hero.css";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="overlay-container">
        <div>
          <p>New Arrival</p>
        </div>
        <div className="overlay-invite">
          <p>Discover Our</p>
          <p>New Collection</p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          officiis voluptas dicta distinctio
        </div>
        <div>
          <Link to='shop'>
            <button className="overlay-btn">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
