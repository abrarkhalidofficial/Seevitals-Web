import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isScrolling: false,
      isHeaderOpen: window.innerWidth > 1000,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          isScrolling: true,
        });
      } else if (window.scrollY === 0) {
        this.setState({
          isScrolling: false,
        });
      }
    });
    window.addEventListener("resize", () => {
      this.setState({
        isHeaderOpen: window.innerWidth > 1000,
      });
    });
  }
  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <Link to="/">
            <img src={logo} className="brand__logo" />
          </Link>
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
}
