import React from "react";
import "../Calculator/style.scss";
import ButtonOur from "../Buttons/ButtonOur/ButtonOur";

import Loc from "../../assets/healthicons_geo-location.svg";
import Sort from '../../assets/tabler_arrows-sort.svg'
import Train from '../../assets/material-symbols_train.svg'

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
          <img src={Sort} alt="sort" className="calc__sort" />
          <p className="calc__text">Станция назначения</p>
          <img src={Loc} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Станция назначения"
            className="calc__item"
          />
          <img src={Sort} alt="sort" className="calc__sort" />
          <p className="calc__text-ps">Тип п/с</p>
          <img src={Train} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Зерновоз"
            className="calc__item"
          />
          <p className="calc__text-date">Выберите дату</p>
          <img src={Loc} alt="location" className="calc__loc" />
          <input
            type="text"
            placeholder="Выберите дату"
            className="calc__item"
          />
          <p className="calc__text-code">Код / Наименование груза по ЕТСНГ</p>
          <input
            type="text"
            placeholder="Код / Наименование груза"
            className="calc__item"
          />
          <ButtonOur text="Рассчитать" showImage={false} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
