import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeClient.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";
import promo4 from "../../assets/promo4.jpg";
import servicio1 from "../../assets/servicio1.jpg";
import servicio2 from "../../assets/servicio2.jpg";
import servicio3 from "../../assets/servicio3.jpg";
import Decoracion from "../../assets/decoracion.png";


const HomeClient = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [promo1, promo2, promo3, promo4];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="homeclient-container">
            <header className="navbar">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <nav className="navbar-links">
                    <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                    <Link to="/registrar-mascota">Registrar Mascota</Link>
                    <Link to="/mis-mascotas">Mis Mascotas</Link>
                    <Link to="/mis-citas">Mis Citas</Link>
                    <Link to="/agendar-cita">Agendar Cita</Link>
                </nav>
                <div className="navbar-user">
                    <button className="logout-button">Logout</button>
                    <i className="fas fa-user user-icon"></i>
                </div>
            </header>

            <main className="promotions-section">
                <h1 className="promotions-title">Promociones</h1>
                <div className="carousel">
                    <div
                        className="carousel-images"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                    >
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Promoción ${index + 1}`} />
                        ))}
                    </div>

                </div>

                <div className="carousel-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
                <section className="nuestros-servicios">
                    <h1>Nuestros Servicios</h1>
                    <div className="servicio-card">
                        <img src={servicio1} alt="Grooming" className="servicio-imagen" />
                        <div className="servicio-info">
                            <h3>Grooming</h3>
                            <p>En VitalPet, cuidamos la apariencia y el confort de tu mascota con servicios de grooming profesionales y personalizados.</p>
                        </div>
                    </div>
                    <div className="servicio-card">
                        <img
                            src={servicio2}
                            alt="Consultas Médicas"
                            className="servicio-imagen"
                        />
                        <div className="servicio-info">
                            <h3>Consultas Médicas</h3>
                            <p>Tu mascota merece lo mejor. En VitalPet ofrecemos atención médica integral para su salud y bienestar.</p>
                        </div>
                    </div>
                    <div className="servicio-card">
                        <img src={servicio3} alt="Emergencias" className="servicio-imagen" />
                        <div className="servicio-info">
                            <h3>Emergencias</h3>
                            <p>VitalPet, tu veterinaria de confianza. Brindamos cuidado completo con servicios de grooming, atención médica y emergencias.</p>
                        </div>
                    </div>
                </section>
                <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />
            </main>
            <footer>
      <div className="footer-container">
        
        <img src={logo} alt="Logo de VitalPet" className="footer-logo" />

        
        <div className="footer-column">
          <h4>Servicios</h4>
          <a href="#">Grooming</a>
          <br />
          <a href="#">Consultas Médicas</a>
          <br />
          <a href="#">Emergencias</a>
          <br />
        </div>
        <div className="footer-column-container">
          <div className="footer-column">
            <h4>VitalPet</h4>
            <p>Centro comercial El Paseo</p>
            <p>Paseo General Escalón</p>
            <p>77 Av Sur, San Salvador</p>
            <p>📞 2273-2189</p>
          </div>
        </div>
        <div className="footer-column footer-socials">
          <h4>Síguenos</h4>
          <a href="#">
            <i className="social-icon fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="social-icon fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 VitalPet.
      </div>
    </footer>
        </div>
    );
};

export default HomeClient;
