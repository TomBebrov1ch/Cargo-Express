import React from "react";
import Train from "../../../assets/train_icon.svg";
import "../ButtonOur/style.scss";

const ButtonOur = () => {
  return (
    <div className="button">
      <button className="button__item">
        <img src={Train} alt="train" className="button__img" />
        <span className="button__text">Наши вагоны</span>
      </button>
    </div>
  );
};

export default ButtonOur;
