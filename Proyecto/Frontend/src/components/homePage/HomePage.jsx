import React, { useState, useEffect } from "react";
import "./HomePage.css";
import logo from "../../assets/logo.png";
import promo1 from "../../assets/promo1.jpg";
import promo2 from "../../assets/promo2.jpg";
import promo3 from "../../assets/promo3.jpg";
import promo4 from "../../assets/promo4.jpg";
import servicio1 from "../../assets/servicio1.jpg";
import servicio2 from "../../assets/servicio2.jpg";
import servicio3 from "../../assets/servicio3.jpg";
import Decoracion from "../../assets/decoracion.png";


const HomePage = () => {
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
                            <p>Cuidado especializado para tu mascota con cortes, baño y mucho más.</p>
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
                            <p>Atención veterinaria completa para el bienestar de tu mascota.</p>
                        </div>
                    </div>
                    <div className="servicio-card">
                        <img src={servicio3} alt="Emergencias" className="servicio-imagen" />
                        <div className="servicio-info">
                            <h3>Emergencias</h3>
                            <p>Estamos disponibles para ayudarte en cualquier situación crítica.</p>
                        </div>
                    </div>
                </section>
                <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />
            </main>
        </div>
    );
};

export default HomePage;
