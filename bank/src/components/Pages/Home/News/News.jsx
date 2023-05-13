import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const News = () => {
  return (
    <section id="news">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-6 p-0 g-3">
            <div className="loan_card">
              <div className="head">
                <h2>Onlayn kredit ödənişi</h2>
              </div>
              <div className="body">
                <div className="description">
                  <p>
                    Banka gəlmədən və növbələrdə vaxt itirmədən kartınızla 4
                    addıma kredit borcunuzun ödənişi.
                  </p>
                  <a href="#">
                    Ödəniş <AiOutlineArrowRight />{" "}
                  </a>
                </div>
                <div className="card_img">
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/content/elements/png/webp/cashPayment.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0 g-3 pl-3">
            <div className="loan_card red_news">
              <div className="head">
                <h2>İnsan resursları</h2>
              </div>
              <div className="body">
                <div className="description">
                  <p>
                    Kapital Bankın peşəkarlar komandasına qoşulmaq
                    istəyirsinizsə, Sizi müvafiq vakansiyaya müraciət etməyə
                    dəvət edirik. Biz sizə dinamik mühitdə maraqlı və
                    perspektivli iş təklif edirik.
                  </p>
                  <a href="#">
                    Ödəniş <AiOutlineArrowRight />{" "}
                  </a>
                </div>
                <div className="card_img">
                  <img
                    src="https://www.kapitalbank.az/assets/static/img/content/elements/png/webp/90789318742-min.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg_gray my-4 py-3">
        <div className="container ">
          <div className="news_header ">
            <h3>Xəbərlər </h3>
            <a href="#">
              Bütün xəbərlər <AiOutlineArrowRight />
            </a>
          </div>
          <div className="row my-4">
            <div className="col-lg-4">
              <div className="news_card">
                <div className="card_left">
                  <div className="circle_div">
                    <span>12</span>
                  </div>
                  <p>May</p>
                </div>
                <div className="card_right">
                  <p>
                    {" "}
                    “Campbell Biologiya” kitabının BDU-da və ADPU-da təqdimatı
                    keçirildi{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news_card">
                <div className="card_left">
                  <div className="circle_div">
                    <span>12</span>
                  </div>
                  <p>May</p>
                </div>
                <div className="card_right">
                  <p>
                    {" "}
                    “Campbell Biologiya” kitabının BDU-da və ADPU-da təqdimatı
                    keçirildi{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="news_card">
                <div className="card_left">
                  <div className="circle_div">
                    <span>12</span>
                  </div>
                  <p>May</p>
                </div>
                <div className="card_right">
                  <p>
                    {" "}
                    “Campbell Biologiya” kitabının BDU-da və ADPU-da təqdimatı
                    keçirildi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
