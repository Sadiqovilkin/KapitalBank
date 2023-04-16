import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Slider = () => {
  return (
    <>
      <section id="slider" className="py-5">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider_text">
                    <h3>
                      {" "}
                      Birbank <strong>Cashback taksit</strong>
                    </h3>
                    <p>
                      {" "}
                      Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                      keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                      bir kartdır.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="container">
                <div className="slider_list">
                  <ul>
                    <li>
                      <span>30%-dək keşbek və 2 qat ƏDV</span>Bonus{" "}
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti{" "}
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti{" "}
                    </li>
                  </ul>
                  <a href="#">Sifariş et</a>
                </div>
                <div className="slider_image">
                  <img
                    src="https://www.kapitalbank.az/images/cards/B/birbank-cashback-home.png?v=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider_text">
                    <h3>
                      {" "}
                      Birbank <strong>Umico taksit</strong>
                    </h3>
                    <p>
                      {" "}
                      Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                      keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                      bir kartdır.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="container">
                <div className="slider_list">
                  <ul>
                    <li>
                      <span>1.5%-dən başlayan</span>Keşbek{" "}
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti{" "}
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti{" "}
                    </li>
                  </ul>
                  <a href="#">Sifariş et</a>
                </div>
                <div className="slider_image">
                  <img
                    src="https://www.kapitalbank.az/images/cards/B/birbank-umico-home.png?v=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="slider_text">
                    <h3>
                      {" "}
                      Birbank <strong>Miles taksit</strong>
                    </h3>
                    <p>
                      {" "}
                      Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                      keşbek, faizsiz və komissiyasız taksit imkanı verən unikal
                      bir kartdır.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider">
              <div className="container">
                <div className="slider_list">
                  <ul>
                    <li>
                      <span>30%-dək keşbek və 2 qat ƏDV</span>Bonus{" "}
                    </li>
                    <li>
                      <span>pulsuz</span>Kartın qiyməti{" "}
                    </li>
                    <li>
                      <span>63 günədək</span>Güzəşt müddəti{" "}
                    </li>
                  </ul>
                  <a href="#">Sifariş et</a>
                </div>
                <div className="slider_image">
                  <img
                    src="https://www.kapitalbank.az/images/cards/B/birbank-miles-home.png?v=4"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="loan">
        <div className="container mb-5">
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <div className="slider_text">
                <h3>
                  {" "}
                  Birbank <strong>Cashback taksit</strong>
                </h3>
                <p>
                  {" "}
                  Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan
                  keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir
                  kartdır.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="container">
            <div className="slider_image">
              <img
                src="https://www.kapitalbank.az/assets/static/img/main-page/daily-loan3.png"
                alt=""
              />
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-8">
                <div className="slider_list">
                  <ul>
                    <li>
                      {" "}
                      <span>30 000 AZN-dək</span> Kredit məbləği{" "}
                    </li>
                    <li>
                      {" "}
                      <span>59 ayadək</span> Kredit müddəti{" "}
                    </li>
                    <li>
                      {" "}
                      <span>13%-dən</span> İllik faiz dərəcəsi{" "}
                    </li>
                  </ul>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
