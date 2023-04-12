import React from "react";
import Banner from "./Banner/Banner";
import Calcuator from "./Calcuator/Calcuator";
import Exchange from "./Exchange_calcuator/Exchange";
import News from "./News/News";
import Swiper from "./Swiper_card/Swiper";

const Home = () => {
  return (
    <main>
      <Banner />
      <Swiper />
      <Calcuator />
      <News />
      <Exchange />
    </main>
  );
};

export default Home;
