import React from "react";
import main__background__img from "../assets/main__background__img.png";
import about__illustration from "../assets/about__illustration.png";
import OurStoryBg from "../assets/OurStoryBg.png";
import VisionBg from "../assets/VisionBg.png";
import visionPic from "../assets/visionPic.png";
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
      <div className="our__vision__container">
        <img
          src={VisionBg}
          alt="VisionBg"
          className="our__vision__container__img"
        />
        <div className="our__vision__container__overlay">
          <div className="our__vision__container__overlay__container">
            <div className="why__choose__us__container__content__heading__container">
              <div
                className="why__choose__us__container__content__heading"
                style={{ color: "#4AB493" }}
              >
                Our Vision
              </div>
              <div className="why__choose__us__container__content__border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="11"
                  viewBox="0 0 100 11"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#0d645d" />
                      <stop offset="1" stop-color="#4ab493" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Group_35"
                    data-name="Group 35"
                    transform="translate(-921 -4991)"
                  >
                    <line
                      id="Line_2"
                      data-name="Line 2"
                      x2="31"
                      transform="translate(987.5 4996.5)"
                      fill="none"
                      stroke="#1a1717"
                      stroke-linecap="round"
                      stroke-width="5"
                    />
                    <line
                      id="Line_3"
                      data-name="Line 3"
                      x2="30.46"
                      transform="translate(923.5 4996.5)"
                      fill="none"
                      stroke="#1a1717"
                      stroke-linecap="round"
                      stroke-width="5"
                    />
                    <circle
                      id="Ellipse_2"
                      data-name="Ellipse 2"
                      cx="5.5"
                      cy="5.5"
                      r="5.5"
                      transform="translate(965 4991)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="our__vision__container__overlay__container__content">
              <div className="our__vision__container__overlay__container__content__img__card">
                <img
                  src={visionPic}
                  alt="visionPic"
                  className="our__vision__container__overlay__container__content__img"
                />
              </div>

              <div className="our__vision__container__overlay__container__content__text__container">
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  {/* <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div> */}
                  <div className="our__vision__container__overlay__container__content__text">
                    We strive to excel in services aimed towards revolutionizing
                    healthcare operations through integrated solutions in
                    technology and consultation. We hope to achieve this through
                    streamlining hospital management and empowering our
                    healthcare workers to perform at their greatest to serve our
                    patients quality healthcare. The ultimate motivation lies in
                    the progress of public health and public health access that
                    will eventually contribute to the betterment of society.
                  </div>
                </div>
                {/* <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Timesaving, cost-saving, and patient-saving. Our solutions
                    are the umbrella under which a hospital can operate
                    efficiently and allow your patients to experience the
                    highest level of patient care through integrated
                    technologies there is to offer in Pakistan. our services
                    stretch beyond a sales invoice and a huge part of our
                    customized solutions involve redesigning them to your needs
                    so we are always in touch.
                  </div>
                </div>
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Heading
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Timesaving, cost-saving, and patient-saving. Our solutions
                    are the umbrella under which a hospital can operate
                    efficiently and allow your patients to experience the
                    highest level of patient care through integrated
                    technologies there is to offer in Pakistan. our services
                    stretch beyond a sales invoice and a huge part of our
                    customized solutions involve redesigning them to your needs
                    so we are always in touch.
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
