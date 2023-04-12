import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Banner = () => {
  return (
    <section id="banner" className="mb-5 pb-5">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="container-xl container-fluid py-4">
            <div className="row align-items-center justify-content-center">
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="content">
                  <h1>
                    Birbank Cashback taksit kartı ilə,
                    <br /> <strong>ƏDV-ni 2 qat geri al!</strong>
                  </h1>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="image">
                  <img
                    src="	https://www.kapitalbank.az/images/slider/version_29/birbank-usp-fevral-20-20231676985545.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-xl container-fluid py-4">
            <div className="row align-items-center">
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="content">
                  <h1>
                    <strong>Qadın sahibkarlara özəl!</strong>
                    <br /> Mikro Biznes kreditinə martda 8% endirim!
                  </h1>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="image">
                  <img
                    src="https://www.kapitalbank.az/images/slider/version_32/8-mart-qadin-sme-kampaniya1677652858.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-xl container-fluid py-4">
            <div className="row align-items-center">
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="content">
                  <h1>
                    <strong>İpoteka krediti</strong>
                  </h1>
                  <p> Mənzil sahibi olmaq və ya yeniləmək istəyənlər üçün </p>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="image">
                  <img
                    src="https://www.kapitalbank.az/images/slider/version_48/ipoteka-krediti1655890221.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-xl container-fluid py-4">
            <div className="row align-items-center">
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="content">
                  <h1>
                    <strong>Həftəsonu iş rejimi</strong>
                  </h1>
                  <p>
                    Bir çox filiallarımız şənbə və bazar günü də fəaliyyət
                    göstərir.
                  </p>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="image">
                  <img
                    src="https://www.kapitalbank.az/images/slider/version_1/heftesonu-is-rejimi1639578179.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-xl container-fluid py-4">
            <div className="row align-items-center">
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="content">
                  <h1>
                    Nağd kredit alın,
                    <br /> <strong>lotereyada şans qazanın!</strong>
                  </h1>
                  <a href="#">Sifariş et</a>
                </div>
              </div>
              <div className=" col-lg-6 col-md-6 col-sm-12 g-3">
                <div className="image">
                  <img
                    src="https://www.kapitalbank.az/images/slider/version_93/gtk-lotereya-feb-20231675664400.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="operations">
        <div className="mini_cards">
          <div className="cart">
            <img
              width="50"
              src="https://www.kapitalbank.az/images/home/birbank-karti.svg"
              alt=""
            />
            <p class="card_title">
              <strong>Taksit kartı </strong>sifariş et
            </p>
          </div>
          <div className="cart">
            <img
              width="50"
              src="https://www.kapitalbank.az/images/home/birbank-karti.svg"
              alt=""
            />
            <p class="card_title">
              <strong>Taksit kartı </strong>sifariş et
            </p>
          </div>
          <div className="cart">
            <img
              width="50"
              src="https://www.kapitalbank.az/images/home/birbank-karti.svg"
              alt=""
            />
            <p class="card_title">
              <strong>Taksit kartı </strong>sifariş et
            </p>
          </div>
          <div className="cart">
            <img
              width="50"
              src="https://www.kapitalbank.az/images/home/birbank-karti.svg"
              alt=""
            />
            <p class="card_title">
              <strong>Taksit kartı </strong>sifariş et
            </p>
          </div>
          <div className="cart">
            <img
              width="50"
              src="https://www.kapitalbank.az/images/home/birbank-karti.svg"
              alt=""
            />
            <p class="card_title">
              <strong>Taksit kartı </strong>sifariş et
            </p>
          </div>
        </div>
        <div className="empty"></div>
      </div>
    </section>
  );
};

export default Banner;
