import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [promo1, promo2, promo3];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="homepage-container">
      <header className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <nav className="navbar-links">
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#registrar-mascota">Registrar Mascota</a>
          <a href="#mis-mascotas">Mis Mascotas</a>
          <a href="#mis-citas">Mis Citas</a>
          <a href="#agendar-cita">Agendar Cita</a>
        </nav>
        <div className="navbar-user">
          <button className="logout-button">Logout</button>
          <i className="fas fa-user user-icon"></i>
        </div>
      </header>

      <main className="promotions-section">
        <h1 className="promotions-title">Promociones</h1>
        <div className="carousel">
          <button className="carousel-arrow left" onClick={handlePrev}>
            &#8249;
          </button>
          <div
            className="carousel-images"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Promoción ${index + 1}`} />
            ))}
          </div>
          <button className="carousel-arrow right" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
