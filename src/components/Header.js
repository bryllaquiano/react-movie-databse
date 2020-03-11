import React from "react";
import "../App.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <Search />
      <div className="navlinks">
        <ul className="menu-items">
          <Link to="/">
            <li>
              <span id="icon">
                <FontAwesomeIcon icon={["fas", "home"]} />
              </span>
              <span id="nav-text">Home</span>
            </li>
          </Link>
          <Link to="/about">
            <li>
              <span id="icon">
                <FontAwesomeIcon icon={["fas", "film"]} />
              </span>
              <span id="nav-text">About</span>
            </li>
          </Link>
          <Link to="/favourites">
            <li>
              <span id="icon">
                <FontAwesomeIcon icon={["fas", "heart"]} />
              </span>
              <span id="nav-text">Favourites</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
