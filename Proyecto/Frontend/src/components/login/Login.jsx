import React from "react";
import LogoLargo from "../../assets/logoLargo.png";
import PerroYGato from "../../assets/perroygato.png";
import GoogleIcon from "../../assets/google.svg";
import Decoracion from "../../assets/decoracion.png";
import "./Login.css";

export const Login = () => {
  return (
    <div id="login-container">
      <img id="logo-principal" src={LogoLargo} alt="Logo Largo" />
      <div id="google-button-container">
        <button id="google-button">
          <img id="google-logo" src={GoogleIcon} alt="Google" />
          INGRESAR CON GMAIL
        </button>
      </div>
      <img id="dog-image" src={PerroYGato} alt="Perro y Gato" />
      <img id="decoracion-image-left" src={Decoracion} alt="Decoracion" />
      <img id="decoracion-image-top-right" src={Decoracion} alt="Decoracion" />
    </div>
  );
};

export default Login;
