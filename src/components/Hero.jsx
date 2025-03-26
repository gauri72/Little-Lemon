import React from 'react';
import { Link } from 'react-router-dom';
import restaurantFood from '../assets/restauranfood.jpg';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern
          twist.
        </p>
        <Link to="/reservations" className="cta-button">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="Delicious restaurant food" />
      </div>
    </section>
  );
};

export default Hero; 