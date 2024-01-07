import React from "react";
import "../Calculator/style.scss";

import Loc from "../../assets/healthicons_geo-location.svg";

const Calculator = () => {
  return (
    <>
      <div className="calc">
        <div className="calc__input">
          <p className="calc__text">Станция отправления</p>
          <img src={Loc} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Станция отправления"
            className="calc__item"
          />
          <p className="calc__text">Станция отправления</p>
          <img src={Loc} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Станция отправления"
            className="calc__item"
          />
          <p className="calc__text">Станция отправления</p>
          <img src={Loc} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Станция отправления"
            className="calc__item"
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
