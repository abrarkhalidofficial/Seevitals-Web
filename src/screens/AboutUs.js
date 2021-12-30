import React from "react";
import aboutus__background__left from "../assets/Aboutus__background__left.png";
import aboutus__background__right from "../assets/Aboutus__background__right.png";

export default function AboutUs() {
  return (
    <div className="about__hero__section">
      <img
        src={aboutus__background__left}
        alt="about__background__leftimg"
        className="about__us__bg"
      />
      <div className="about__hero__section__right__img">
        <img
          src={aboutus__background__right}
          className="about__hero__section__right__img__bg"
        />
      </div>
      <div className="about__hero__section__heading">
        <div className="about__hero__section__heading1">We Want to See you</div>
        <div className="about__hero__section__heading2">
          <span>Technology</span> in <span>Healthcare</span>
        </div>
        <div className="about__hero__section__heading3">
          Like You’ve Never Seen
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="about__hero__section__heading">
          <div className="about__hero__section__heading1">
            We Want to See you
          </div>
          <div className="about__hero__section__heading2">
            <span>Technology</span> in <span>Healthcare</span>
          </div>
          <div className="about__hero__section__heading3">
            Like You’ve Never Seen
          </div>
        </div>
        <img
          src={aboutus__background__right}
          alt="about__background__rightimg"
          className="about__hero__section__right__img"
        />
      </div> */
}
