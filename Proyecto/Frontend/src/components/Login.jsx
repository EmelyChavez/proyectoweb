import React from "react";
import LogoLargo from "../assets/logoLargo.png";
import PerroYGato from "../assets/perroygato.png";
import GoogleIcon from "../assets/google.svg"; // Importa el archivo local de Google
import Decoracion from "../assets/decoracion.png"; // Importa la nueva imagen

export const Login = () => {
  return (
    <div
      id="login-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5faff",
        fontFamily: "'Quicksand', 'Roboto', sans-serif",
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      {/* Logo principal */}
      <img
        id="logo-principal"
        src={LogoLargo}
        alt="Logo Largo"
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          maxWidth: 500,
        }}
      />

      {/* Botón de Google */}
      <div
        id="google-button-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "30vh",
          backgroundColor: "#c4e3f7",
          borderRadius: 60,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <button
          id="google-button"
          style={{
            width: "70%",
            height: "30%",
            borderRadius: 30,
            border: "none",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            color: "#606060",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          <img
            id="google-logo"
            src={GoogleIcon} // Usa el archivo local importado
            alt="Google"
            style={{ width: 24, marginRight: 10 }}
          />
          INGRESAR CON GMAIL
        </button>
      </div>

      {/* Contenedor para el perro */}
      <img
        id="dog-image"
        src={PerroYGato}
        alt="Perro y Gato"
        style={{
          position: "absolute",
          bottom: "-1%",  
          right: "0%",  
          width: "14vw",
          maxWidth: "90%",
        }}
      />
      
      {/* Imagen de decoración abajo a la izquierda */}
      <img
        id="decoracion-image"
        src={Decoracion}
        alt="Decoracion"
        style={{
          position: "absolute",
          bottom: "0", // Ubica en la parte inferior
          left: "0", // Ubica en la parte izquierda
          width: "20vw", // Ajusta el tamaño de la imagen
          maxWidth: "100%",
        }}
      />
      {/* Imagen de decoración volcada hacia abajo en la esquina superior derecha */}
      <img
        id="decoracion-image"
        src={Decoracion}
        alt="Decoracion"
        style={{
          position: "absolute",
          top: "0", 
          right: "0", 
          width: "20vw", 
          maxWidth: "100%",
          transform: "rotate(90deg) scaleY(-1)", 
        }}
      />
    </div>
  );
};

export default Login;
