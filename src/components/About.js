import React from "react";
import "../App.css";
import tmdb_logo from "../images/tmdb-logo.png";

function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        This Movie Search Application is built to demonstrate the use of the JavaScript Framework - React.
      </p>
      
      <div className="tmdb-statement">
      <p>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </p>
      <img id="tmdb-logo" src={tmdb_logo} alt="The Movie Database Logo" />
      </div>
    </div>
  );
}

export default About;
