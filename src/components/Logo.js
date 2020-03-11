import React from "react";
import "../App.css";
import notflix_logo from "../images/notflix-logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={notflix_logo} alt="Notflix logo" />
    </div>
  );
}

export default Logo;
