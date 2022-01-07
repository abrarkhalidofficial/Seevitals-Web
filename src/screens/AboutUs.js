import React from "react";
import main__background__img from "../assets/main__background__img.png";
import about__illustration from "../assets/about__illustration.png";
import OurStoryBg from "../assets/OurStoryBg.png";
import VisionBg from "../assets/VisionBg.png";
import visionPic from "../assets/visionPic.svg";
import ourStroy from "../assets/ourStroy.svg";
import gallary1 from "../assets/gallary1.jpg";
import gallary2 from "../assets/gallary2.jpg";
import gallary3 from "../assets/gallary3.jpg";
import gallary4 from "../assets/gallary4.jpg";

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
            Leading <span>Health</span> Tech Innovation
          </div>
          {/* <div className="about__us__container__jumbotron__overlay__para">
            Like You've Never Seen
          </div> */}
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
                SeeVitals Technologies is an ambitious project brought to life
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
            <img src={ourStroy} alt="visionPic" />
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
              <div className="our__vision__container__overlay__container__content__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="67"
                  height="439.606"
                  viewBox="0 0 67 439.606"
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
                  <g id="Group_3746" data-name="Group 3746">
                    <g
                      id="Rectangle_1495"
                      data-name="Rectangle 1495"
                      fill="#fff"
                      stroke="#30927c"
                      stroke-width="1"
                    >
                      <rect width="67" height="64" rx="18" stroke="none" />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="66"
                        height="63"
                        rx="17.5"
                        fill="none"
                      />
                    </g>
                  </g>
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    y2="120"
                    transform="translate(33.672 64.5)"
                    fill="none"
                    stroke="#2b8b77"
                    stroke-width="1"
                  />
                  <g
                    id="Rectangle_1495-2"
                    data-name="Rectangle 1495"
                    transform="translate(0 184)"
                    fill="#fff"
                    stroke="#2c8c78"
                    stroke-width="1"
                  >
                    <rect width="67" height="64" rx="18" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="66"
                      height="63"
                      rx="17.5"
                      fill="none"
                    />
                  </g>
                  <line
                    id="Line_6-2"
                    data-name="Line 6"
                    y2="127"
                    transform="translate(33.5 248.5)"
                    fill="none"
                    stroke="#31947d"
                    stroke-width="1"
                  />
                  <g
                    id="Rectangle_1495-3"
                    data-name="Rectangle 1495"
                    transform="translate(0 375.606)"
                    fill="#fff"
                    stroke="#3aa085"
                    stroke-width="1"
                  >
                    <rect width="67" height="64" rx="18" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="66"
                      height="63"
                      rx="17.5"
                      fill="none"
                    />
                  </g>
                  <g
                    id="Group_3745"
                    data-name="Group 3745"
                    transform="translate(19.69 195.425)"
                  >
                    <path
                      id="Path_32"
                      data-name="Path 32"
                      d="M86.419,610.537a.943.943,0,0,1-.55-.957c.012-1.713-.039-3.427.014-5.138a12.858,12.858,0,0,1,7.1-11.547c.039-.021.081-.037.172-.078-.226.663-.448,1.277-.645,1.9a37.368,37.368,0,0,0-1.307,5.655.411.411,0,0,1-.339.389A3.052,3.052,0,0,0,88.8,604a3.059,3.059,0,0,0,6,.416,3.022,3.022,0,0,0-1.822-3.579c-.3-.116-.326-.226-.278-.518a33.843,33.843,0,0,1,2.311-8.07.464.464,0,0,1,.332-.3,12.618,12.618,0,0,1,3.37-.487,23.72,23.72,0,0,1,3.906.135c.469.079.933.187,1.4.277a.231.231,0,0,1,.214.191,23.9,23.9,0,0,1,.726,4.393.459.459,0,0,1-.305.5,11.684,11.684,0,0,0-4.076,3.1,4.558,4.558,0,0,0-1.02,2.257,3.341,3.341,0,0,0,1.324,3.124,2.543,2.543,0,0,0,.34.244.727.727,0,0,0,.969-.171.735.735,0,0,0-.1-1.005c-.086-.078-.185-.141-.274-.215a1.907,1.907,0,0,1-.576-2.487,5.469,5.469,0,0,1,1.5-1.858,12.462,12.462,0,0,1,2.468-1.628c.115-.059.211-.112.339.01a10.279,10.279,0,0,1,2.732,3.7,3.526,3.526,0,0,1,.227.945,1.878,1.878,0,0,1-1.23,2.047c-.127.056-.264.094-.384.162a.744.744,0,0,0-.311.939.736.736,0,0,0,.9.4,3.479,3.479,0,0,0,2.326-4.573,9.7,9.7,0,0,0-2.342-3.789,2.763,2.763,0,0,0-.441-.447,1.45,1.45,0,0,1-.613-1.391,15.478,15.478,0,0,0-.513-3.58c-.014-.066-.025-.132-.045-.244a10.751,10.751,0,0,1,1.988,1.047,12.941,12.941,0,0,1,5.834,9.032,12.492,12.492,0,0,1,.146,2.054c0,1.643-.008,3.286,0,4.929a.962.962,0,0,1-.553.991Z"
                      transform="translate(-85.858 -574.736)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_33"
                      data-name="Path 33"
                      d="M113.741,552.949a7.782,7.782,0,1,1,7.772-7.8A7.787,7.787,0,0,1,113.741,552.949Z"
                      transform="translate(-99.755 -537.385)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                  <g
                    id="Group_5741"
                    data-name="Group 5741"
                    transform="translate(-14.514 -104.083)"
                  >
                    <path
                      id="Path_5918"
                      data-name="Path 5918"
                      d="M30,134.808c.1-.653.166-1.311.29-1.959a17.973,17.973,0,0,1,7.246-11.5,17.7,17.7,0,0,1,8.1-3.266,17.9,17.9,0,0,1,10.9,1.852,2.162,2.162,0,0,1,.2.131c-.869.868-1.718,1.725-2.585,2.564a.469.469,0,0,1-.4.018,14.871,14.871,0,0,0-3.407-.935,14.219,14.219,0,0,0-9.458,1.809,13.836,13.836,0,0,0-6.846,9.289,14.114,14.114,0,0,0,4.932,14.516,13.928,13.928,0,0,0,7.8,3.246,14.553,14.553,0,0,0,14.855-20.038.476.476,0,0,1,.01-.4c.836-.87,1.69-1.722,2.593-2.632.249.528.49,1,.694,1.479a18.169,18.169,0,0,1-12.878,24.868c-.771.168-1.562.242-2.344.361-.1.016-.206.044-.309.067H46.906a1.712,1.712,0,0,0-.27-.066,17.44,17.44,0,0,1-7.809-2.533,17.884,17.884,0,0,1-8.547-12.461c-.115-.612-.188-1.231-.281-1.847Z"
                      transform="translate(0 0)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5920"
                      data-name="Path 5920"
                      d="M122.825,195.521c-1.048.993-.695,2.3-.787,3.555a9.1,9.1,0,0,0-7.782.241,8.77,8.77,0,0,0-4.029,4.057A9.11,9.11,0,0,0,123.1,215.225a9.226,9.226,0,0,0,3.647-11.453c1.216-.107,2.533.267,3.522-.78a12.741,12.741,0,1,1-7.447-7.472Z"
                      transform="translate(-70.203 -71.333)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5921"
                      data-name="Path 5921"
                      d="M197.877,276.1a7.264,7.264,0,1,1-12.522-1.4,7.148,7.148,0,0,1,8.768-2.3,1.5,1.5,0,0,0-.344.195q-2.229,2.215-4.445,4.442a2.7,2.7,0,0,0,1.044,4.553,2.674,2.674,0,0,0,2.851-.763q2.143-2.15,4.291-4.3C197.637,276.42,197.73,276.281,197.877,276.1Z"
                      transform="translate(-143.019 -142.925)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5922"
                      data-name="Path 5922"
                      d="M282.75,154.512a4.905,4.905,0,0,0-1.717.044c-.486.195-.828.751-1.229,1.152q-2.386,2.383-4.77,4.769a.966.966,0,0,1-1.014.341.9.9,0,0,1-.494-1.392,2.673,2.673,0,0,1,.309-.341q2.823-2.825,5.651-5.645a.739.739,0,0,0,.245-.586c-.015-.935,0-1.87-.009-2.8a1.084,1.084,0,0,1,.34-.823q2.638-2.633,5.27-5.273a.955.955,0,0,1,1.09-.291.918.918,0,0,1,.57.969c-.006.757.007,1.515-.006,2.272,0,.244.067.331.32.326.757-.014,1.515,0,2.272-.007a.92.92,0,0,1,.972.565.951.951,0,0,1-.284,1.092q-2.628,2.618-5.247,5.246a1.129,1.129,0,0,1-.884.368c-.461-.016-.923,0-1.384,0Z"
                      transform="translate(-226.069 -23.873)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                  <g
                    id="Group_5743"
                    data-name="Group 5743"
                    transform="translate(-121.917 224.644)"
                  >
                    <path
                      id="Path_5929"
                      data-name="Path 5929"
                      d="M327.238,375.036H338.59L322.459,393.33l-.09-.035Z"
                      transform="translate(-164.183 -195.983)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5930"
                      data-name="Path 5930"
                      d="M136.423,374.845h2.889c2.691,0,5.381,0,8.072-.007.3,0,.422.074.5.38q2.332,8.793,4.689,17.58c.029.108.039.221.078.453Z"
                      transform="translate(0 -195.809)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5931"
                      data-name="Path 5931"
                      d="M261.6,393.42l-4.869-18.256h9.835L261.7,393.42Z"
                      transform="translate(-106.226 -196.096)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5932"
                      data-name="Path 5932"
                      d="M152.887,284.911l-1.424,2.493c-.97,1.7-1.944,3.4-2.907,5.1a.51.51,0,0,1-.506.314q-5.417-.014-10.834-.007c-.056,0-.113-.008-.225-.017.092-.114.151-.2.226-.279,2.366-2.369,4.728-4.743,7.111-7.094a1.568,1.568,0,0,1,.932-.486C147.773,284.893,150.287,284.911,152.887,284.911Z"
                      transform="translate(-0.501 -116.402)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5933"
                      data-name="Path 5933"
                      d="M340.867,292.689h-.445q-5.308,0-10.617,0a.509.509,0,0,1-.536-.261c-1.4-2.478-2.817-4.948-4.228-7.421-.028-.049-.049-.1-.1-.2.166-.011.3-.029.437-.029,2.252,0,4.5.01,6.756-.009a1.869,1.869,0,0,1,1.438.6c2.305,2.327,4.627,4.638,6.943,6.954C340.61,292.413,340.7,292.51,340.867,292.689Z"
                      transform="translate(-166.457 -116.281)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_5934"
                      data-name="Path 5934"
                      d="M269.2,292.607h-9.035l4.515-7.905Z"
                      transform="translate(-109.257 -116.221)"
                      fill="url(#linear-gradient)"
                    />
                  </g>
                </svg>
              </div>
              <div className="our__vision__container__overlay__container__content__text__container">
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Mission
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Intervention at an earlier stage to provide better
                    lifestyles and healthier outcomes by introducing AI-
                    generated risk alert system.
                  </div>
                </div>
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Vision
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Revolutionize how the data is monitored in Pakistan and used
                    to generate early warning systems for the patients
                    decreasing the morbidity and mortality rates by early
                    interventions.
                  </div>
                </div>
                <div className="our__vision__container__overlay__container__content__text__container__content">
                  <div className="our__vision__container__overlay__container__content__heading">
                    Value Proposition
                  </div>
                  <div className="our__vision__container__overlay__container__content__text">
                    Contactless continuous remote patient monitoring with an AI-
                    enabled early risk assessment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallary__container">
        <img
          src={OurStoryBg}
          alt="OurStoryBg"
          className="gallary__container__img"
        />
        <div className="gallary__container__content">
          <div className="gallary__container__content__wrapper">
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
            <div className="gallary__container__content__wrapper__content">
              <img
                src={gallary1}
                alt="gallary1"
                className="gallary__container__content__wrapper__content__img"
              />
              <img
                src={gallary2}
                alt="gallary2"
                className="gallary__container__content__wrapper__content__img"
              />
              <img
                src={gallary3}
                alt="gallary3"
                className="gallary__container__content__wrapper__content__img"
              />
              <img
                src={gallary4}
                alt="gallary4"
                className="gallary__container__content__wrapper__content__img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
