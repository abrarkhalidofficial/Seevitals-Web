import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <img
          src="https://avatars.githubusercontent.com/u/68416499?s=400&u=44f53c74beb2463c2f40ea9b2eda2cb3dd27c22e&v=4"
          className="brand__logo"
        />
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
            <div className="nav__link__content">Products</div>
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
            <div className="nav__link__content">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
