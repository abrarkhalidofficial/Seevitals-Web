import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img src={logo} className="brand__logo" />
        <div className="nav">
          <div className="nav__link">
            <input
              type="radio"
              className="nav__link__input"
              name="nav__link__input"
            />
            <div className="nav__link__content">Home</div>
          </div>
          <div className="nav__link">
            <input
              type="radio"
              className="nav__link__input"
              name="nav__link__input"
            />
            <div className="nav__link__content">About Us</div>
          </div>
          <div className="nav__link">
            <input
              type="radio"
              className="nav__link__input"
              name="nav__link__input"
            />
            <div className="nav__link__content">Products</div>
          </div>
          <div className="nav__link">
            <input
              type="radio"
              className="nav__link__input"
              name="nav__link__input"
            />
            <div className="nav__link__content">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}
