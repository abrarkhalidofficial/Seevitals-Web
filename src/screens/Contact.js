import React from "react";
import main__background__img from "../assets/main__background__img.png";

export default function Contact() {
  return (
    <div>
      <section class="hero__section">
        <div class="hero__section__container">
          <div class="hero__section__container__bg">
            <img src={main__background__img} alt="bg-1" />
          </div>

          <div class="hero__section__container__textbox">
            <h2>
              Let's talk <span>to Us</span>{" "}
            </h2>
            <h3>Feel free for Contact</h3>
          </div>
        </div>
      </section>
      <section className="contact__form__section">
        <div className="contact__form__section__container">
          <div className="contact__form__section__container__header">
            <h3>Get in Touch</h3>
            <h3>Contact info</h3>
          </div>
          <div className="contact__form__section__container__form">
            <form
              action="#"
              className="contact__form__section__container__form__left"
            >
              <input type="text" className="input__field" placeholder="Name" />
              <input
                type="email"
                className="input__field"
                placeholder="Email"
              />
              <input
                type="text"
                className="input__field"
                list="list"
                placeholder="data list la layo"
              />
              <textarea
                name="textarea"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
              <input type="button" value="Submit" />
            </form>

            <div className="contact__form__section__container__form__right"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
