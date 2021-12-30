import React from "react";
import aboutus__background__left from "../assets/Aboutus__background__left.png";
import aboutus__background__right from "../assets/Aboutus__background__right.png";
import aboutus__story__background__img from "../assets/Aboutus__story__background__img.png";

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
      <div className="about__story">
        <img
          src={aboutus__story__background__img}
          className="about__story__img__bg"
        />
        <div className="aboutus__story__body">
          <div className="aboutus__story__body1">
            SeeVITALS Technologies is an ambitious project brought to life by 3
            friends that have recognized the dire need of technological
            interventions in the healthcare industry. 2 doctors having worked in
            numerous healthcare setups from around the world understood that the
            need to optimize the role of nurses and allied hospital staff
            remained crucial. Especially in ICUs (Intensive Care Units) and HDUs
            (High Dependency Units), where time was of the essence. While
            shifting their focus from their individual clinical practices to a
            solution best fit for both hospital staff and their patients, the
            idea started taking shape during a mutual hospital management
            degree.
          </div>
          <div className="aboutus__story__body2">
            We felt that the time taken for clerical work (patient charting,
            hourly recordings, etc.) could be better utilized and patient care
            can thus be improved. Here’s where our computer scientist came in.
            With thorough experience in the field and an existing network with
            the health industry alike, Dayyan proposed to introduce a technology
            that could cater to the nurses and doctors as well as improve
            patient risk assessment and bed throughput time.
          </div>
        </div>
        <div className="aboutus__story__heading">Our Story</div>
      </div>
    </div>
  );
}
