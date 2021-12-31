import React from "react";
import main__background__img from "../assets/main__background__img.png";
import about__illustration from "../assets/about__illustration.png";
import OurStoryBg from "../assets/OurStoryBg.png";
export default function AboutUs() {
  return (
    <>
      <div className="about__us__container__jumbotron">
        <img
          src={main__background__img}
          alt="main__background__img"
          className="about__us__container__jumbotron__main__bg"
        />
        <div className="about__us__container__jumbotron__overlay">
          <img
            src={about__illustration}
            alt="about__illustration"
            className="about__illustration"
          />
          <div className="about__us__container__jumbotron__overlay__heading">
            We Want to See you <span>Technology </span>in
            <span> Healthcare</span>
          </div>
          <div className="about__us__container__jumbotron__overlay__para">
            Like You've Never Seen
          </div>
        </div>
      </div>
      <div className="our__story__container">
        <img
          src={OurStoryBg}
          alt="OurStoryBg"
          className="our__story__container__img"
        />
        <div className="our__story__container__overlay">
          <div className="our__story__container__overlay__wrapper">
            <div className="our__story__container__overlay__content">
              <div className="our__story__container__overlay__content__para">
                <div className="our__story__container__overlay__content__para__heading">
                  Our Story
                </div>
                SeeVITALS Technologies is an ambitious project brought to life
                by 3 friends that have recognized the dire need of technological
                interventions in the healthcare industry. 2 doctors having
                worked in numerous healthcare setups from around the world
                understood that the need to optimize the role of nurses and
                allied hospital staff remained crucial. Especially in ICUs
                (Intensive Care Units) and HDUs (High Dependency Units), where
                time was of the essence. While shifting their focus from their
                individual clinical practices to a solution best fit for both
                hospital staff and their patients, the idea started taking shape
                during a mutual hospital management degree.
              </div>
              <div className="our__story__container__overlay__content__para">
                We felt that the time taken for clerical work (patient charting,
                hourly recordings, etc.) could be better utilized and patient
                care can thus be improved. Here’s where our computer scientist
                came in. With thorough experience in the field and an existing
                network with the health industry alike, Dayyan proposed to
                introduce a technology that could cater to the nurses and
                doctors as well as improve patient risk assessment and bed
                throughput time.
              </div>
            </div>
          </div>
          <div className="our__story__container__overlay__heading">
            Our Story
          </div>
        </div>
      </div>
    </>
  );
}
