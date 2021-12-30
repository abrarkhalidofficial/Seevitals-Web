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
import parameterBg from "../assets/parameterBg.png";
import clinicSvgInactive from "../assets/outcomesSectionSvg/clinicSvgInactive.svg";
import clinicSvgActive from "../assets/outcomesSectionSvg/clinicSvgActive.svg";
import icuInactive from "../assets/outcomesSectionSvg/icuInactive.svg";
import icuActive from "../assets/outcomesSectionSvg/icuActive.svg";
import careInactive from "../assets/outcomesSectionSvg/careInactive.svg";
import careActive from "../assets/outcomesSectionSvg/careActive.svg";

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
      <div className="parameters__container">
        <img
          src={parameterBg}
          alt="parameter__container__bg"
          className="parameter__container__bg"
        />
        <div className="parameters__container__content">
          <div className="parameters__container__content__headings__container">
            <div className="parameters__container__content__headings">
              Parameters Monitored By SeeVitals
            </div>
            <div className="parameters__container__content__para">
              Contactless Blood Pressure, Heart Rate, Respiration Rate & Sleep
              Monitor
            </div>
          </div>
          <div className="parameters__container__content__entries__wrapper">
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
              </div>
            </div>
            <div className="parameters__container__content__entry">
              <div className="parameters__container__content__entry__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="68"
                  height="68"
                  viewBox="0 0 68 68"
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
                    <clipPath id="clip-path">
                      <circle
                        id="Ellipse_79"
                        data-name="Ellipse 79"
                        cx="34"
                        cy="34"
                        r="34"
                        transform="translate(-0.165 0.378)"
                        stroke="#707070"
                        stroke-width="1"
                        fill="url(#linear-gradient)"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Mask_Group_3"
                    data-name="Mask Group 3"
                    transform="translate(0.165 -0.378)"
                    clip-path="url(#clip-path)"
                  >
                    <g
                      id="Group_1741"
                      data-name="Group 1741"
                      transform="translate(-5.462 -5.462)"
                    >
                      <path
                        id="Path_46"
                        data-name="Path 46"
                        d="M-316.785,389.157a1.515,1.515,0,0,1,1,1.638c-.023,3.275-.036,6.55,0,9.825.013,1.172-.545,1.6-1.624,1.6q-7.739,0-15.479,0c-1.143,0-1.752-.485-1.745-1.694q.027-4.837,0-9.676a1.49,1.49,0,0,1,1.116-1.694c1.385.137,2.777.112,4.166.15a3.606,3.606,0,0,0,2.484-.781c.792-.171,1.3-.832,2-1.157.451-.21.859-.724,1.46-.349.433,2.768,2.552,2.243,4.4,2.274C-318.262,389.31-317.531,389.116-316.785,389.157Z"
                        transform="translate(363.721 -367.625)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_47"
                        data-name="Path 47"
                        d="M-333.58,428.046a.663.663,0,0,0-.26-.516c-2.04-1.342-2.381-3.316-2.337-5.594.1-4.966.054-9.935.016-14.9-.013-1.853-.467-2.292-2.291-2.35-1.439-.047-2.88.007-4.321-.021-2.87-.054-4.151-1.258-4.1-4.1.083-4.249-.426-8.521.428-12.745-.237-.322-.491-.182-.779-.063-4.282,1.773-8.643,3.341-12.895,5.2-3.924,1.717-7.971,3.153-11.964,4.714a7.771,7.771,0,0,0-1.21,3.255,10.7,10.7,0,0,0-.191,3.957,4.549,4.549,0,0,1-.049,2.061c-.467,1.842.08,3.589.473,5.352a56.935,56.935,0,0,0,1.57,7.116c.176.846.016,1.817.889,2.405v.006a5.155,5.155,0,0,0,1.5,3.285l2.964,4.8c.294,1.041,1.216,1.585,1.86,2.349l.234.307a29.189,29.189,0,0,0,3.667,3.985,7.3,7.3,0,0,0,3.166,2.307,1.143,1.143,0,0,1,.285.022,3.306,3.306,0,0,0,.887-.072q5.194-1.915,10.375-3.869c3.124-1.182,6.238-2.393,9.357-3.589q3.577-1.373,7.155-2.743a7.115,7.115,0,0,0-1.592-.207C-331.684,428.266-332.709,428.766-333.58,428.046Z"
                        transform="translate(373.706 -367.811)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_48"
                        data-name="Path 48"
                        d="M-315.251,422.8c-1.941,2.322-1.984,4.538-.171,6.341a3.98,3.98,0,0,0,1.929.981c-.75.564-.354,1.364-.383,2.05-.056,1.333-.675,2.056-2,1.973-1.219-.077-2.576.489-3.6-.66a33.568,33.568,0,0,0-.036-4.449c-.389-2.882,1.633-4.335,3.284-6.038A1.129,1.129,0,0,1-315.251,422.8Z"
                        transform="translate(359.869 -376.797)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_49"
                        data-name="Path 49"
                        d="M-295.159,394.75l-.072-.564c-.207-1.845-.161-3.746-1.216-5.4q-.147-.413-.3-.827c-.267-.732.121-1.706-.814-2.19l-.347-.868a4.285,4.285,0,0,0-1.415-3l-3.041-4.8c-.252-.25-.141-.756-.605-.856l-1.506-1.769a43.192,43.192,0,0,0-4.762-5.014,4.319,4.319,0,0,0-1.781-.98l-4.2-2.646a12.737,12.737,0,0,0-6.272-2.713,53.242,53.242,0,0,0-10.117-1.909c-1.586-.521-3.169.179-4.755.007l-.32.019a36.748,36.748,0,0,0-4.441.309,1.44,1.44,0,0,0-.638.36.2.2,0,0,1-.214.055c-1.689.582-3.669.154-5.142,1.484l-4.155,1.775c-.746.319-1.7.241-2.135,1.146l-.545.345a13.581,13.581,0,0,0-6.028,4.4l-.336.333c-1.391.564-1.87,2.076-3.008,2.9A3.9,3.9,0,0,0-365,376.568l.01,0a12.051,12.051,0,0,0-3.582,5.7l-2.127,4.721a5.383,5.383,0,0,0-.99,3.838c.613.39,1.149.019,1.685-.19,6.613-2.583,13.178-5.288,19.789-7.877a24.7,24.7,0,0,1,4.344-1.54,20.528,20.528,0,0,1,3.127-1.231,7.5,7.5,0,0,1,3.326-.339c2.27-.016,2.271,0,2.856,2.165.447.511.913.232,1.306-.034a17.537,17.537,0,0,1,2.376-1.282c0-.027,0-.054-.005-.081.047-.521.189-1.1.762-1.133a25.353,25.353,0,0,1,5.179.053c.255.036.47.345.7.529v.281c.056.025.112.041.167.068,2.262.77,3.167,1.786,3.225,3.919q.135,4.995,0,9.994a3.628,3.628,0,0,1-3.811,3.732c-1.54.051-3.083-.011-4.624.024-1.912.043-2.253.364-2.263,2.3q-.041,7.907,0,15.814c0,.63-.08,1.315.536,1.775.721-.21.569-.844.6-1.338.063-1.178.041-2.36.02-3.54-.048-2.71,1.658-4.231,3.7-5.536.523-.164,1.015-.407,1.542-.557a3.752,3.752,0,0,1,4.5,1.7,3.646,3.646,0,0,1-.865,4.589c-.427.406-.99.685-1.209,1.283a7.307,7.307,0,0,0-.145,2.052c-.028,3.144-1.325,4.4-4.516,4.481-1.213.029-2.461-.267-3.636.287-.207.8.438.724.858.778a9.1,9.1,0,0,0,2.614-.082,8.276,8.276,0,0,0-1.663.456c-7.6,2.865-15.147,5.864-22.769,8.672a6.68,6.68,0,0,0-2.421,1.07,36,36,0,0,0,3.922,2.624,13.124,13.124,0,0,0,6.272,2.713,1.176,1.176,0,0,1,.882.3,17.12,17.12,0,0,0,7.166,1.494l-.005,0c2.083.673,4.225-.073,6.289.217,2.108.3,3.97-.46,5.936-.788l.1-.06.116.005c1.686-.588,3.671-.147,5.138-1.489l4.158-1.769a12.521,12.521,0,0,0,5.973-3.634l.27-.259a3.91,3.91,0,0,0,2.463-2.017l.634-.614c1.063-.311,1.437-1.309,2.055-2.063.508-1.131,1.774-1.635,2.285-2.763a10.762,10.762,0,0,0,3.62-5.651q1.083-2.53,2.168-5.06c1.137-1.071.9-2.551,1.153-3.884l0-.006c.1-1.216.709-2.291.916-3.513.3-1.789-.164-3.571.185-5.268C-294.285,398.536-294.827,396.675-295.159,394.75Z"
                        transform="translate(373.193 -361.011)"
                        fill="url(#linear-gradient)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="parameters__container__content__entry__text">
                Blood Pressure
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
