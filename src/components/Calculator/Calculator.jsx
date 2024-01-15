import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Calculator/style.scss";
import ButtonOur from "../Buttons/ButtonOur/ButtonOur";
import { TbArrowsUpDown } from "react-icons/tb";

import Loc from "../../assets/healthicons_geo-location.svg";
import Train from "../../assets/material-symbols_train.svg";

const Calculator = () => {
  const [city, setCity] = useState([]);
  const [error, setError] = useState("");
  const apiKeyData = {
    station_type: "station",
    transport_type: "train",
  };

  const entries = Object.entries(apiKeyData);

  const sortedEntries = entries.sort((a, b) => a[1].localeCompare(b[1]));

  const sortedApiKeyData = Object.fromEntries(sortedEntries);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(
          "https://api.rasp.yandex.net/v3.0/stations_list/?apikey=451653b1-2640-4db7-8d54-23fa929e16b5&lang=ru_RU&format=json"
        );
        setCity(response.data);
        console.log(response.data);
      } catch (error) {
        setError("Could not zhopa zhopa");
        console.error("zhopa", error);
      }
    };
    fetchCity();
  }, []);
  return (
    <>
      <div className="calc">
        <div className="calc__inputs">
          <div className="calc__input">
            <p className="calc__text">Станция отправления</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Станция отправления"
              className="calc__item"
            />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <tbody>
            {city.map((station) => (
              <tr key={station.transport_type}>
                <td>{station.station_type}</td>
                <td>{station.code}</td>
              </tr>
            ))}
          </tbody>
          <div className="calc__input">
            <p className="calc__text">Станция назначения</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Станция назначения"
              className="calc__item"
            />
            <TbArrowsUpDown color="gray" className="calc__sort" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Тип п/с</p>
            <img src={Train} alt="location" className="calc__loc" />
            <input type="text" placeholder="Зерновоз" className="calc__item" />
          </div>
          <div className="calc__input">
            <p className="calc__text">Выберите дату</p>
            <img src={Loc} alt="location" className="calc__loc" />
            <input
              type="text"
              placeholder="Выберите дату"
              className="calc__item"
            />
          </div>
          <div className="calc__input">
            <p className="calc__text">Код / Наименование груза по ЕТСНГ</p>
            <input
              type="text"
              placeholder="Выберите Код / Наименование груза"
              className="calc__item-s"
            />
          </div>
        </div>
        <button className="calc__button">Расчитать</button>
      </div>
    </>
  );
};

export default Calculator;
