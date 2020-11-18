import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/Navigator.css";
import logo from "../images/logo.png";

const Navigator = () => {
  const [burgerBar, setBurgerBar] = useState(false);
  return (
    <>
      <div className="logo-container">
        <img src={logo} alt="logo" /> Bakee
      </div>
      <ul className={burgerBar ? "burger" : "nav-link col-layout"}>
        <li>
          <Link to="/" className="link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            Our Store
          </Link>
        </li>
      </ul>
      <div
        className="bars"
        onClick={(previousState) => setBurgerBar(!previousState)}
      >
        {burgerBar ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </>
  );
};

export default Navigator;
