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
import clinicSvgInactive from "../assets/outcomesSectionSvg/clinicSvgInactive.svg";
import clinicSvgActive from "../assets/outcomesSectionSvg/clinicSvgActive.svg";
import icuInactive from "../assets/outcomesSectionSvg/icuInactive.svg";
import icuActive from "../assets/outcomesSectionSvg/icuActive.svg";
import careInactive from "../assets/outcomesSectionSvg/careInactive.svg";
import careActive from "../assets/outcomesSectionSvg/careActive.svg";
import { SectionsHeading } from "../components";

export default function Home() {
  return (
    <>
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
        <div className="services__container__content">
          <div className="addons__container__content__heading">Services</div>
          <div className="services__container__cards__container">
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
      </div>
      <div className="addons__container">
        <img
          src={AddonSectionBg}
          alt="addons__container__img"
          className="addons__container__img"
        />
        <div className="addons__container__content">
          <div className="addons__container__content__heading">
            Value Addons
          </div>
          <div className="addons__container__content__cards">
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
                Welcome To SeeVitals
              </div>
              <div className="welcome__container__content__gradiant__content__sub__heading">
                Contactless patient monitoring & Early Warning System for Step
                down ICU & HDU Units
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="outcomes__container">
        <div className="outcomes__container__content">
          <div className="outcomes__container__content__headings__container">
            <div className="outcomes__container__content__heading">
              Improve Patient Outcomes
            </div>
            <div className="outcomes__container__content__para">
              In Your Hospital With SeeVitals Early Warning System
            </div>
          </div>
          <div className="outcomes__container__content__cards__container">
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Improved Clinical Outcomes & Patient Safety
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Maximize ICU bed throughput
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Critical Care Outreach automation
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Digitalization of vitals monitoring
              </div>
            </div>
          </div>
          <div className="outcomes__container__content__cards__container">
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Nursing efficiency
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Convenient & Easy to adopt
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Patient History
              </div>
            </div>
            <div className="outcomes__container__content__card">
              <img
                src={careInactive}
                alt="clinicSvgInactive"
                className="outcomes__container__content__card__svg"
              />
              <img
                src={careActive}
                alt="clinicSvgActive"
                className="outcomes__container__content__card__svg__hover"
              />
              <div className="outcomes__container__content__card__text">
                Doctors ease
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
