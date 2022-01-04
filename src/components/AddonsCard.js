import React, { useState } from "react";

export default function AddonsCard({ img, hoverImg, text }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="new__addons__container__content__card"
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <img
        src={hovered ? hoverImg : img}
        alt="addons img"
        className="new__addons__container__content__card__img"
      />

      <div className="new__addons__container__content__card__content">
        {text}
      </div>
    </div>
  );
}
