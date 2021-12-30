import React from "react";
import main__background__img from "../assets/main__background__img.png";
import main__illustration from "../assets/main__illustration.png";
import productSvgInactive from "../assets/productSvgInactive.svg";
import productSvgActive from "../assets/productSvgActive.svg";
import healthSvgInactive from "../assets/healthSvgInactive.svg";
import healthSvgActive from "../assets/healthSvgActive.svg";
import consultationsSvgInactive from "../assets/consultationsSvgInactive.svg";
import consultationsSvgActive from "../assets/consultationsSvgActive.svg";
import remoteSvgInactive from "../assets/remoteSvgInactive.svg";
import remoteSvgActive from "../assets/remoteSvgActive.svg";
import TrendSvg from "../assets/TrendSvg.svg";
import patientSaftySvg from "../assets/patientSaftySvg.svg";
import apiSvg from "../assets/apiSvg.svg";
import AddonSectionBg from "../assets/AddonSectionBg.png";
import welcomeBg from "../assets/welcomeBg.png";
import doctorsPic from "../assets/doctorsPic.png";
import { SectionsHeading } from "../components";

export default function Home() {
  return (
    <>
      <div className="main__container">
        <div className="main__container__jumbotron">
          <img
            src={main__background__img}
            alt="main__background__img"
            className="main__container__jumbotron__main__bg"
          />
          <div className="main__container__jumbotron__overlay">
            <img
              src={main__illustration}
              alt="main__illustration"
              className="main__illustration"
            />
            <div className="main__container__jumbotron__overlay__heading">
              Technology in <span>Healthcare</span>
            </div>
            <div className="main__container__jumbotron__overlay__para">
              Like You've Never Seen
            </div>
          </div>
        </div>
        <div className="services__container">
          <SectionsHeading heading="Sevices" />
          <div className="services__container__content">
            <div className="services__container__card__wrapper">
              <img
                src={healthSvgInactive}
                alt="healthSvgInactive"
                className="services__container__card__wrapper__svg"
              />
              <img
                src={healthSvgActive}
                alt="healthSvgActive"
                className="services__container__card__wrapper__svg__hover"
              />
              <div className="services__container__card__text">
                <span>Customized</span> Health Tech Solutions
              </div>
            </div>
            <div className="services__container__card__wrapper">
              <img
                src={productSvgInactive}
                alt="productSvgInactive"
                className="services__container__card__wrapper__svg"
              />
              <img
                src={productSvgActive}
                alt="productSvgInactive"
                className="services__container__card__wrapper__svg__hover"
              />
              <div className="services__container__card__text">
                <span>Product</span>Development
              </div>
            </div>
            <div className="services__container__card__wrapper">
              <img
                src={consultationsSvgInactive}
                alt="consultationsSvgInactive"
                className="services__container__card__wrapper__svg"
              />
              <img
                src={consultationsSvgActive}
                alt="consultationsSvgActive "
                className="services__container__card__wrapper__svg__hover"
              />
              <div className="services__container__card__text">
                <span>Technical</span>Consultations
              </div>
            </div>
            <div className="services__container__card__wrapper">
              <img
                src={remoteSvgInactive}
                alt="remoteSvgInactive"
                className="services__container__card__wrapper__svg"
              />
              <img
                src={remoteSvgActive}
                alt="remoteSvgActive"
                className="services__container__card__wrapper__svg__hover"
              />
              <div className="services__container__card__text">
                <span>Remote</span>
                Patient Monitoring
              </div>
            </div>
          </div>
        </div>
        <div className="addons__container">
          <SectionsHeading heading="Value Addons" />
          <img
            src={AddonSectionBg}
            alt="AddonSectionBg"
            className="AddonSectionBg"
          />

          <div className="addons__container__content">
            <div className="addons__container__content__card">
              <img
                src={TrendSvg}
                alt="TrendSvg"
                className="addons__container__content__card__svg"
              />
              {/* <img
                src={healthSvgActive}
                alt="healthSvgActive"
                className="addons__container__content__card__svg__hover"
              /> */}
              <div className="addons__container__content__card__text">
                Health Trends
              </div>
            </div>
            <div className="addons__container__content__card">
              <img
                src={apiSvg}
                alt="apiSvg"
                className="addons__container__content__card__svg"
              />
              {/* <img
                src={healthSvgActive}
                alt="healthSvgActive"
                className="addons__container__content__card__svg__hover"
              /> */}
              <div className="addons__container__content__card__text">
                Integration with HIMS with API & SDK
              </div>
            </div>
            <div className="addons__container__content__card">
              <img
                src={patientSaftySvg}
                alt="patientSaftySvg"
                className="addons__container__content__card__svg"
              />
              {/* <img
                src={healthSvgActive}
                alt="healthSvgActive"
                className="addons__container__content__card__svg__hover"
              /> */}
              <div className="addons__container__content__card__text">
                Improved Patient Safety with DEWS
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome__container">
        <img src={welcomeBg} alt="" className="welcome__container__img" />
        <div className="welcome__container__content">
          <img
            src={doctorsPic}
            alt=""
            className="welcome__container__content__img"
          />
          <div className="welcome__container__content__gradiant">
            <div className="welcome__container__content__gradiant__content">
              <div className="welcome__container__content__gradiant__content__heading">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="welcome__container__content__gradiant__content__sub__heading">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laborum, excepturi. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Laborum, excepturi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="welcome__container__overlay__heading">
Welcome To SeeVitals
</div>
<div className="welcome__container__overlay__para">
Contactless patient monitoring & Early Warning System for Step
down ICU & HDU Units
</div> */
}
