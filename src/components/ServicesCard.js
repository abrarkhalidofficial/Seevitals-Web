import React, { useState } from "react";

export default function ServicesCard({ img, hoverImg, text, info }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="new__services__container__content__card"
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <img
        src={hovered ? hoverImg : img}
        alt="services img"
        className="new__services__container__content__card__img"
      />

      <div className="new__services__container__content__card__content">
        {text}
      </div>
      <div className="new__services__container__content__card__info">
        {info}
      </div>
    </div>
  );
}
