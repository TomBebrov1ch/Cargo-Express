import React from "react";

import MainScreen from "../../screens/MainScreen/MainScreen.jsx";
import AboutScreen from "../../screens/AboutScreen/AboutScreen.jsx";
import QuestScreen from '../../screens/QuestionScreen/QuestScreen.jsx'

const HomePage = () => {
  return (
    <>
      <MainScreen />
      <AboutScreen />
      <QuestScreen />
    </>
  );
};

export default HomePage;
